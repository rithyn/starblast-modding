(function setup() {
    const { defineProperty, getOwnPropertyDescriptor } = Object;
    const { set, get } = WeakMap.prototype, { apply } = Reflect;
    const { includes, splice, push } = Array.prototype;
    const { split, trim } = String.prototype;

    const call = function (func: Function, thisArg: any, ...args: any[]) {
        return apply(func, thisArg, args);
    };

    const timeouts = ["setTimeout", "setInterval", "clearTimeout", "clearInterval"];
    const { compile, getValue, remoteLog, strictMode, timer_pool, parentGlobal, Promise } = this as any;
    const { console, Buffer } = parentGlobal;
    let coreJsShared: any;

    const natifyFunc = function (func: Function, name: string) {
        defineProperty(func, 'name', {
            ...getOwnPropertyDescriptor(func, 'name'),
            value: name
        });

        if ("function" === typeof coreJsShared?.state?.set) coreJsShared.state.set(func, {
            source: `function ${func.name || name || "anonymous"}() { [native code] }`,
            facade: func
        });

        return func;
    };

    const protofy = function (mClass: any, key: string, value: Function, newName = key) {
        defineProperty(mClass.prototype, key, {
            writable: true,
            configurable: true,
            enumerable: true,
            value: natifyFunc(value, newName)
        });
    };

    const renameClass = function (obj: any, origin: any, name: string) {
        defineProperty(obj, Symbol.toStringTag, {
            ...getOwnPropertyDescriptor(origin, Symbol.toStringTag),
            value: name
        });
    };

    renameClass(window, parentGlobal, "Window");

    delete this.timer_pool;
    delete this.parentGlobal;

    // Timeout functionality polyfill
    for (let t of timeouts) {
        if (t.startsWith("set")) {
            let interval = t === "setInterval";
            let timerFunc = function (FunctionOrCode: string | Function, ...params: any[]) {
                let exec = FunctionOrCode;
                if ("string" === typeof exec) exec = () => compile(FunctionOrCode);

                let o = timer_pool.add(parentGlobal[t].call(this, function (...args: any[]) {
                    try { exec.call(this, ...args); }
                    finally { if (!interval) timer_pool.remove(o, true); }
                }, ...params), interval);

                return o;
            }.bind(this);

            this[t] = function (handler: TimerHandler, delay?: number, ...params: any[]) {
                return timerFunc(handler, delay, ...params);
            };
        } else {
            this[t] = function (timerID: number) {
                timer_pool.remove(timerID);
            };
        }
    }

    let xhrSuccess = false, fetchSuccess = false;

    // Basic functionality polyfill
    try {
        eval(required_codes["core-js"]);
        coreJsShared = this['__core-js_shared__'];
        delete this['__core-js_shared__'];

        for (let i of timeouts) natifyFunc(this[i], i);

        // Polyfill XMLHttpRequest
        try {
            let mod = { exports: {} };
            Function("module", "Buffer", "require", "process", required_codes.xhr
                .replace(/Error\("(INVALID_STATE_ERR|SecurityError): ([^"])([^"]*?)"/g, (v, a, b, c) => `DomException("${b.toUpperCase()}${c}", "${a == "SecurityError" ? a : "InvalidStateError"}"`)
            )(mod, Buffer, this.require, this.require("process"));
            this.XMLHttpRequest = mod.exports.XMLHttpRequest;
            xhrSuccess = true;

            try {
                // Finally, fetch() polyfill
                eval(required_codes.fetch.replaceAll("\nexport ", "\n").replace("this.map = {}", `
                    var actualMap = new Map();
                    this.map = new Proxy({}, {
                        get: function (target, prop, receiver) {
                            if (actualMap.has(prop)) return actualMap.get(prop);
                            return Reflect.get(target, prop, receiver);
                        },
                        set: function (target, prop, newValue) {
                            actualMap.set(prop, newValue);
                            return true;
                        },
                        ownKeys: function (target) {
                            return [...actualMap.keys()];
                        },
                        getOwnPropertyDescriptor: function (target, prop) {
                            if (!actualMap.has(prop)) return undefined;
                            return { enumerable: true, writable: true, configurable: true, value: actualMap.get(prop) };
                        }
                    });
                `));
                fetchSuccess = true;
            } catch (e) {
                console.warn("'fetch()' API is unavailable due to polyfill failure.");
            }
        } catch (e) {
            console.warn("Failed to polyfill XMLHttpRequest. This feature along with 'fetch()' API will be unavailable.");
        }
    } catch (e) {
        console.warn("Basic polyfill has failed. Some features might not be available.");
    }
    delete this.require;
    delete this.required_codes;

    if (xhrSuccess) {
        // Proxy some classes to prevent leaking values
        const { TypeError, WeakMap } = this as any;
        const maps: Record<string, WeakMap<any, any>> = {};
        const internals: Record<string, any> = {};
        const proxiedClasses = [
            {
                name: "XMLHttpRequest",
                functions: ["addEventListener", "removeEventListener", "dispatchEvent", "abort", "getAllResponseHeaders", "getResponseHeader", "open", "send", "setRequestHeader"],
                getters: ["readyState", "responseURL", "responseText", "responseType", "responseXML", ["status", 0], ["statusText", ""], "upload"],
                setters: [["timeout", 0], ["withCredentials", false], "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress", "onreadystatechange", "ontimeout"],
                preCall: function (newConst: any, map: WeakMap<any, any>, args: any[]) {
                    call(splice, args, 0, args.length, {
                        allowFileSystemResources: false,
                        origin: "https://starblast.data.neuronality.com/modding/moddingcontent.html"
                    });
                },
                postCall: function (instance: any) {
                    let { getResponseHeader, getAllResponseHeaders } = instance;
                    instance.getAllResponseHeaders = function () {
                        try { return call(getAllResponseHeaders, this, ...arguments); } catch (e) { return ""; }
                    };

                    instance.getResponseHeader = function () {
                        try { return call(getResponseHeader, this, ...arguments); } catch (e) { return null; }
                    };
                },
                customCaller: function (mClass: any, map: WeakMap<any, any>) {
                    protofy(mClass, "overrideMimeType", function () { });

                    defineProperty(mClass.prototype, 'response', {
                        enumerable: true,
                        configurable: true,
                        get: natifyFunc(function () {
                            let obj = getObj(map, this, { name: "", method: "", promise: false });
                            return obj.response instanceof Buffer ? null : obj.response;
                        }, `get body`)
                    });
                }
            }
        ];

        // Additional logic for fetchSuccess and proxied classes...
    }

    // Additional logic for Modding, Game, and other classes...

    // Cleanup and return
    return { setCode, modding, execute, echo, error };
}).call(globalThis);