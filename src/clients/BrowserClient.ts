import fs1 from 'fs';
import { promises as fs } from 'fs';
import ModdingEvents from "../resources/Events.js";
import ModdingClient from "./ModdingClient.js";
import GameCode from "../utils/GameCode.js";
import URLFetcher from "../utils/URLFetcher.js";
import toString from "../utils/toString.js";
import { Script, createContext, Context } from "node:vm";
import { decode } from "html-entities";

const required_codes = {
    "core-js": fs1.readFileSync(require.resolve("core-js-bundle/minified.js"), "utf8"),
    "xhr": fs1.readFileSync(require.resolve("xmlhttprequest-ssl/lib/XMLHttpRequest.js"), "utf8"),
    "fetch": fs1.readFileSync(require.resolve("whatwg-fetch/fetch.js"), "utf8")
};

type BrowserClientOptions = {
    cacheECPKey?: boolean;
    extendedMode?: boolean;
    strictMode?: boolean;
    persistentContext?: boolean;
    sameCodeExecution?: boolean;
    crashOnException?: boolean;
    crashOnError?: boolean;
    logErrors?: boolean;
    logExceptions?: boolean;
    logMessages?: boolean;
    compressWSMessages?: boolean;
};

/**
 * The Browser Client Instance for supporting mod codes running in Browser Modding. <br><b>Warning: </b><br><ul><li>This client doesn't support undocumented features like accessing through `game.modding`, etc. </li><li>Some of the latest features of the new ModdingClient (which may not work in browsers) will be available. </li><li>Using Promise-related functionalities (including async/await) in your mod code is highly DISCOURAGED since NodeJS VM doesn't work well with Promise, and will likely crash or hang the running mod.</li>
 * @param {object} options - options for calling the object. <br><b>Note that</b> if both one property and its aliases exist on the object, the value of the main one will be chosen
 * @param {boolean} [options.cacheECPKey = false] - same with option specified at {@link ModdingClient}
 * @param {boolean} [options.extendedMode = false] - same with option specified at {@link ModdingClient}
 * @param {boolean} [options.strictMode = false] - Commands that affect the instance configuration (e.g `region`) won't be allowed to execute
 * @param {boolean} [options.persistentContext = true] - context where mod and command is executing on will be persistent across mod runs
 * @param {boolean} [options.sameCodeExecution = false] - loading the same code will trigger the execution or not. <br><b>Note:</b> This feature only works when you call `loadCodeFromString`, `loadCodeFromLocal` or `loadCodeFromExternal` methods, and not during the auto-update process
 * @param {boolean} [options.crashOnException = false] - when tick or event function, or mod code execution fails, the mod will crash
 * @param {boolean} options.crashOnError - alias of the property `options.crashOnException`
 * @param {boolean} [options.logErrors = true] - game will log any errors or not
 * @param {boolean} options.logExceptions - alias of the property `options.logErrors`
 * @param {boolean} [options.logMessages = true] - game will log any in-game logs or not
 * @param {boolean} [options.compressWSMessages = false] - same with option specified at {@link ModdingClient}
 * @since 1.1.0-alpha6
 */
class BrowserClient {
    #vmContext!: Context;
    #contextBridge: any;
    #modding: any;
    #timer_pool = {
        id: 0,
        data: new Map<number, { timer: NodeJS.Timeout; interval: boolean }>(),
        add: function (timer: NodeJS.Timeout, interval: boolean) {
            this.data.set(++this.id, { timer, interval });
            return this.id;
        },
        remove: function (timerID: number, noRemove = false) {
            const timer = this.data.get(timerID);
            if (!timer) return;
            if (!noRemove) this.manualRemove(timer);
            this.data.delete(timerID);
        },
        manualRemove: function (timer: { timer: NodeJS.Timeout; interval: boolean }) {
            if (timer.interval) clearInterval(timer.timer);
            else clearTimeout(timer.timer);
        },
        reset: function () {
            for (const timer of this.data.values()) this.manualRemove(timer);
            this.id = 0;
            this.data.clear();
        }
    };

    #node: ModdingClient;
    #sameCodeExecution: boolean;
    #strictMode: boolean;
    #logErrors: boolean;
    #logMessages: boolean;
    #persistentContext: boolean;
    #crashOnError: boolean;

    #path: string | null = null;
    #URL: string | null = null;
    #code: string | null = null;
    #lastCode: string | null = null;

    #watchChanges = false;
    #watchInterval = 5000;
    #watchIntervalID: NodeJS.Timeout | null = null;
    #assignedWatch = false;
    #executionTimeout: number | undefined;

    #messageHandler: ((data: { type: "error" | "log"; content: string; raw: string }) => void) | null = null;

    constructor(options: BrowserClientOptions) {
        this.#sameCodeExecution = !!options?.sameCodeExecution;
        this.#strictMode = !!options?.strictMode;
        this.#logErrors = !!(options?.logErrors ?? options.logExceptions ?? true);
        this.#logMessages = !!(options?.logMessages ?? true);
        this.#persistentContext = !!(options?.persistentContext ?? true);
        this.#crashOnError = !!(options?.crashOnException ?? options?.crashOnError);

        this.#node = new ModdingClient({ ...options, cacheEvents: true, cacheOptions: false });

        this.resetContext();

        // Events
        if (!this.#crashOnError) {
            this.#node.on(ModdingEvents.ERROR, (error: Error) => {
                if (this.#logErrors) console.error("[In-game Error]", error);
            });
        }

        this.#node.on(ModdingEvents.LOG, (...args: any[]) => {
            if (this.#logMessages) console.log("[In-game Log]", ...args);
        });

        this.#node.on(ModdingEvents.MOD_STOPPED, () => {
            this.#clearWatch();
            this.#lastCode = null;
        });
    }

    #clearWatch() {
        if (this.#watchIntervalID) clearInterval(this.#watchIntervalID);
        this.#assignedWatch = false;
    }

    #startWatch() {
        const watchFunc = async () => {
            await this.#applyChanges();
            this.#watchIntervalID = setTimeout(watchFunc, this.#watchInterval);
        };
        this.#watchIntervalID = setTimeout(watchFunc, this.#watchInterval);
    }

    #setWatchInterval(watchChanges: boolean, interval?: number, timeout?: number) {
        this.#clearWatch();
        this.#assignedWatch = false;
        this.#watchChanges = !!watchChanges;
        if (this.#watchChanges) this.#watchInterval = Math.max(1, Math.floor(interval ?? 5000)) || 5000;
        this.#executionTimeout = timeout;
        return this;
    }

    async #applyChanges(forced: boolean = false, exec: boolean = false) {
        try {
            const lastCode = this.#lastCode;
            this.#lastCode = this.#URL
                ? await this.#fromExternal()
                : this.#path
                ? await this.#fromLocal()
                : this.#code;

            if (this.#watchChanges && (this.#URL || this.#path) && !this.#assignedWatch) {
                this.#clearWatch();
                this.#startWatch();
                this.#assignedWatch = true;
            }

            const sameCode = this.#lastCode === lastCode;
            if (!sameCode || (forced && this.#sameCodeExecution)) {
                if (!this.#node.processStarted) {
                    if (!this.#persistentContext) this.resetContext();
                }

                await this.#contextBridge.setCode(exec || this.#node.processStarted);
            }
        } catch (e) {
            this.#node.error(e);
        }
    }

    async #fromLocal() {
        return fs.readFile(this.#path!, 'utf-8');
    }

    async #fromExternal() {
        return URLFetcher(this.#URL!);
    }

    #vmExec(code: string, timeout?: number) {
        return new Script(code, {
            filename: "VM.BrowserClient_ModContext",
            importModuleDynamically: async () => {
                throw new Error("Module import is not supported.");
            }
        }).runInContext(this.#vmContext, {
            timeout: timeout ?? this.#executionTimeout,
            displayErrors: true
        });
    }

    /**
     * Destroy and recreate the context where mod and command execution is running on.
     * @since 1.4.14-alpha6
     */
    resetContext() {
        if (this.#node.processStarted) throw new Error("Context cannot be reset because mod/process is currently running.");

        this.#timer_pool.reset();

        const compile = (code: string, timeout?: number) => {
            return this.#vmExec(code, timeout);
        };

        // Apply a new environment
        this.#vmContext = createContext({
            require,
            required_codes,
            parentGlobal: globalThis,
            timer_pool: this.#timer_pool,
            node: this.#node,
            ModdingEvents,
            strictMode: this.#strictMode,
            remoteCompile: async (code: string) => {
                return await compile(`(${Function("game", code).toString()}).call(this.game.modding.context, this.game)`);
            },
            remoteLog: (e: { content: string; raw: string; type: string }) => {
                this.#remoteLog(e);
            },
            compile,
            getValue: async () => {
                if (this.#lastCode == null) await this.#applyChanges(true, false);
                return this.#lastCode;
            }
        });

        Object.defineProperty(this.#vmContext, 'window', {
            enumerable: true,
            configurable: false,
            get: function window() {
                return this;
            }
        });

        // Run setup script and get required parameters
        this.#contextBridge = this.#vmExec(GameCode, 5000);
        this.#modding = this.#contextBridge.modding;
    }

    #remoteLog(e: { content: string; raw: string; type: string }) {
        if (typeof this.#messageHandler === "function") {
            try {
                this.#messageHandler({
                    content: decode(e.content),
                    raw: e.raw,
                    type: e.type
                });
            } finally {}
        } else {
            this.#node[e.type](decode(e.content));
        }
    }

    // Other methods (e.g., setRegion, setECPKey, loadCodeFromString, etc.) remain unchanged but typed.
}

export default BrowserClient;