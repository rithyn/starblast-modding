'use strict';

import GameSocket from "../utils/GameSocket.js";
import getEntity from "../utils/getEntity.js";
import events from "../resources/Events.js";
import defineProperties from "../utils/defineProperties.js";
import getJoinPacketName from "../utils/getJoinPacketName.js";
import deepFreeze from "../utils/deepFreeze.js";

const standard_modes = ["survival", "team", "invasion", "deathmatch", "battleroyale"];

type Address = {
    ip: string;
    port: string;
};

type ModdingAPI = {
    encodeOptionsError: boolean;
    game: any;
    compressWSMessages: boolean;
    configuration: {
        options: Record<string, any>;
    };
    lastRejectHandler?: (reason?: any) => void;
    stopTriggered: boolean;
    mod_data: Record<string, any>;
    preflight_requests: any[];
    handlers: {
        create: Map<string, { resolve?: (value?: any) => void; reject?: (reason?: any) => void }>;
        destroy: Map<string, { resolve?: (value?: any) => void; reject?: (reason?: any) => void }>;
    };
    create_requests: string[];
    gameClient: any;
    triggerStopEvent: () => void;
};

type Token = string;

/**
 * Creates and manages the modding event manager.
 * @param {ModdingAPI} api - The modding API instance.
 * @param {Address} address - The server address.
 * @param {Token} token - The modding token.
 * @returns {Promise<any>} A promise that resolves when the mod is successfully started.
 */
export async function create(api: ModdingAPI, address: Address, token: Token): Promise<any> {
    if (api.encodeOptionsError) {
        api.game.error("Failed to encode game options");
        api.game.error("Mod will be run with empty options instead");
    }
    delete api.encodeOptionsError;

    const socket = GameSocket.create(address.ip, address.port, "https://starblast.data.neuronality.com", api.compressWSMessages);

    socket.on("open", function () {
        this.send(
            JSON.stringify({
                name: "run_mod",
                data: {
                    token: token,
                    options: api.configuration.options
                }
            })
        );
    });

    return new Promise(function (resolve, reject) {
        api.lastRejectHandler = reject;

        socket.on("message", function (event, isBinary) {
            if (!isBinary) {
                try {
                    event = JSON.parse(event.toString()) ?? {};
                } catch (e) {
                    event = {};
                }
                const data = event.data;

                switch (event.name) {
                    case "mod_started":
                        Object.assign(api, {
                            socket: socket,
                            ip: address.ip,
                            id: data.id,
                            port: address.port,
                            started: true,
                            stopped: false
                        });
                        api.mod_data.options = data.options;

                        if (api.extendedMode) {
                            getJoinPacketName()
                                .then(packet => {
                                    if (api.stopTriggered) return;
                                    api.gameClient.connect(address.ip, data.id, address.port, packet);
                                    api.gameClient.initTeamStats();
                                })
                                .catch(e => {
                                    if (!api.gameClient.socket.requestClose) {
                                        api.game.error("Failed to establish extensive connection to the game. Customization and extended team data might not be available.");
                                    }
                                    if (!api.mod_data.optionsLocked && api.mod_data.options != null && typeof api.mod_data.options === "object") {
                                        deepFreeze(api.mod_data.options);
                                        api.mod_data.optionsLocked = true;
                                    }
                                });
                        } else {
                            deepFreeze(api.mod_data.options);
                            api.mod_data.optionsLocked = true;
                        }

                        while (api.preflight_requests.length > 0) {
                            api.set(api.preflight_requests.shift()).send();
                        }

                        resolve(api.game.link);
                        api.game.emit(events.MOD_STARTED, api.game.link, api.game.options);
                        break;

                    case "tick":
                        api.mod_data.step = data.step;
                        for (const key of ["aliens", "asteroids", "collectibles", "ships", "objects", "teams"]) {
                            api.mod_data[key]?.update?.(true);
                        }
                        api.updateTimer();
                        api.game.emit(events.TICK, data.step);
                        break;

                    // Additional cases for handling events...

                    case "error": {
                        const error = new Error(event.text);
                        switch (event.text) {
                            case "Incorrect data":
                            case "Too many aliens":
                            case "Too many asteroids":
                            case "Too many Collectibles":
                                const uuid = api.create_requests.shift();
                                const handler = api.handlers.create;
                                const reject = handler.get(uuid)?.reject;
                                handler.delete(uuid);
                                api.game.findStructureByUUID(uuid, true)?.markAsInactive?.();
                                reject?.(error);
                                break;
                            default:
                                api.game.error(event.text);
                        }
                        break;
                    }

                    // Additional event handling logic...
                }
            }
        });

        socket.on("close", function () {
            switch (api.gameClient?.socket?.readyState) {
                case GameSocket.OPEN:
                    api.gameClient.socket.close();
                case GameSocket.CONNECTING:
                case GameSocket.CLOSING:
                    return (api.gameClient.socket.requestClose = true);
                case GameSocket.CLOSED:
                    api.gameClient.socket.requestClose = true;
                default:
                    return api.triggerStopEvent();
            }
        });
    });
}