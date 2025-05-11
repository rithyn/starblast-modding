'use strict';

import runMod from "../utils/runMod.js";
import deepFreeze from "../utils/deepFreeze.js";
import AlienManager from "../managers/AlienManager.js";
import AsteroidManager from "../managers/AsteroidManager.js";
import CollectibleManager from "../managers/CollectibleManager.js";
import ShipManager from "../managers/ShipManager.js";
import ObjectManager from "../managers/ObjectManager.js";
import TimeManager from "../managers/TimeManager.js";
import Events from "../resources/Events.js";

type ModdingAPIOptions = {
    cacheECPKey?: boolean;
    cacheOptions?: boolean;
    cacheEvents?: boolean;
    compressWSMessages?: boolean;
    extendedMode?: boolean;
};

type Handler = {
    resolve?: (value?: any) => void;
    reject?: (reason?: any) => void;
};

class ModdingAPI {
    game: Game;
    cacheECPKey: boolean;
    cacheOptions: boolean;
    cacheEvents: boolean;
    compressWSMessages: boolean;
    extendedMode: boolean;
    gameClient: any;
    events: typeof Events;
    handlers: {
        create: Map<string, Handler>;
        destroy: Map<string, Handler>;
    };
    configuration: Record<string, any>;
    create_requests: any[];
    mod_data: Record<string, any>;
    stopHandlers: Handler[];
    instanced: Record<string, any>;
    started: boolean = false;
    stopped: boolean = false;
    processStarted: boolean = false;
    preflight_requests: any[] = [];
    pending_request: Record<string, any> = {};
    stopTriggered: boolean = false;
    encodeOptionsError: boolean = false;
    lastRejectHandler?: (error: Error) => void;
    constructor<T>(game: T, options: ModdingAPIOptions) {
        this.game = game;
        this.cacheECPKey = !!options?.cacheECPKey;
        this.cacheOptions = !!options?.cacheOptions;
        this.cacheEvents = !!options?.cacheEvents;
        this.compressWSMessages = !!options?.compressWSMessages;
        this.extendedMode = !!options?.extendedMode;
        this.gameClient = new (require("../clients/GameClient.js"))(this.game, this);
        this.events = Events;
        this.handlers = {
            create: new Map(),
            destroy: new Map()
        };
        this.configuration = {};
        this.create_requests = [];
        this.mod_data = {};
        this.stopHandlers = [];
        this.instanced = {};
        this.clientReset(this.game);
    }

    clear(): this {
        return this.set();
    }

    setOptions(options: Record<string, any>): void {
        const setup = this.processStarted ? this.instanced : this.configuration;
        setup.options = options;
    }

    setRegion(region: string): void {
        const setup = this.processStarted ? this.instanced : this.configuration;
        setup.region = region;
    }

    setECPKey(ECPKey: string): void {
        const setup = this.processStarted ? this.instanced : this.configuration;
        setup.ECPKey = ECPKey;
    }

    getRequestOptions(): Record<string, any> {
        return this.configuration.options;
    }

    getRegion(): string {
        return this.configuration.region;
    }

    reset(skipStop = false): void {
        this.started = false;
        this.stopped = true;
        this.processStarted = false;
        this.preflight_requests = [];
        this.gameClient.socket = null;
        this.clear();

        if (!this.cacheECPKey && !skipStop) delete this.configuration.ECPKey;
        else this.configuration.ECPKey = this.instanced.ECPKey;

        if (!this.cacheOptions && !skipStop) delete this.configuration.options;
        else this.configuration.options = this.instanced.options;

        this.configuration.region = this.instanced.region;

        if (!this.cacheEvents && !skipStop) this.game.removeAllListeners();

        while (this.stopHandlers.length > 0) {
            const { resolve } = this.stopHandlers.shift()!;
            resolve?.(this.game);
        }
    }

    async start(): Promise<any> {
        try {
            this.configuration.options = deepFreeze(JSON.parse(JSON.stringify(this.configuration.options ?? {})));
            this.encodeOptionsError = false;
        } catch (e) {
            this.configuration.options = deepFreeze({});
            this.encodeOptionsError = true;
        }
        this.processStarted = true;
        this.stopTriggered = false;
        Object.assign(this.instanced, {
            region: this.configuration.region,
            options: this.configuration.options,
            ECPKey: this.configuration.ECPKey
        });
        try {
            return await runMod(this);
        } catch (e) {
            this.reset(true);
            throw e;
        }
    }

    stop(): Promise<Game> {
        return new Promise((resolve, reject) => {
            this.stopHandlers.push({ resolve, reject });
            this.name("stop").send(null, "stop");
        });
    }

    name(name: string): this {
        return this.prop("name", name);
    }

    set(data?: Record<string, any>): this {
        this.pending_request = Object.assign({}, data);
        return this;
    }

    prop(name: string, data: any): this {
        this.pending_request[name] = data;
        return this;
    }

    data(...data: Record<string, any>[]): this {
        const pData = data[0] ?? {};
        Object.assign(pData, ...data.slice(1));
        return this.prop("data", pData);
    }

    clientMessage(id: string | null, name: string, data: Record<string, any>): this {
        this.name("client_message");
        data = Object.assign({}, data, { name });
        return this.data({ id, data });
    }

    globalMessage(name: string, data: Record<string, any>): this {
        return this.clientMessage(null, name, data);
    }

    send(uuid?: string, action?: string): this {
        const pr = this.pending_request;
        if (this.started) {
            try {
                this.gameClient.socket.send(JSON.stringify(pr));
                if (typeof pr.name === "string" && pr.name.match(/^add_(alien|asteroid|collectible)$/)) {
                    this.create_requests.push(pr.data.uuid);
                }
            } catch (e) {
                if (arguments.length > 0) {
                    const error = new Error("Failed to encode request");
                    switch (action) {
                        case "create":
                        case "destroy": {
                            const handler = this.handlers[action];
                            const reject = handler.get(uuid!)?.reject;
                            handler.delete(uuid!);
                            this.game.findStructureByUUID(uuid!)?.markAsInactive?.();
                            reject?.(error);
                            break;
                        }
                        case "stop": {
                            while (this.stopHandlers.length > 0) {
                                const { reject } = this.stopHandlers.shift()!;
                                reject?.(error);
                            }
                            break;
                        }
                        default:
                            this.game.emit("error", error, this.game);
                    }
                }
            }
        } else {
            this.preflight_requests.push(pr);
        }
        return this.clear();
    }

    clientReset(client: Game): void {
        client.custom = {};
        const stopError = new Error("Mod had stopped before the action could be completed");
        for (const key of ["create", "destroy"]) {
            const handlers = [...this.handlers[key].entries()];
            this.handlers[key].clear();
            for (const handler of handlers) handler[1]?.reject?.(stopError);
        }
        this.create_requests.splice(0);
        Object.assign(this.mod_data, {
            aliens: new AlienManager(client, this),
            asteroids: new AsteroidManager(client, this),
            collectibles: new CollectibleManager(client, this),
            ships: new ShipManager(client, this),
            objects: new ObjectManager(client, this),
            timer: new TimeManager(client, this),
            teams: null,
            options: null,
            step: -1
        });
        this.reset();
    }

    triggerStopEvent(): void {
        if (this.stopTriggered) return;
        this.stopTriggered = true;
        const isStarted = this.game.started;
        if (!isStarted) this.lastRejectHandler?.call?.(this.game, new Error("Failed to run the mod"));
        this.game.emit(this.events.MOD_STOPPED, this.game);
        this.clientReset(this.game);
    }
}

export default ModdingAPI;