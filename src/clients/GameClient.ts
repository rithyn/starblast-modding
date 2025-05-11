'use strict';

import GameSocket from "../utils/GameSocket.js";
import TeamManager from "../managers/TeamManager.js";
import getEntity from "../utils/getEntity.js";
import defineProperties from "../utils/defineProperties.js";
import deepFreeze from "../utils/deepFreeze.js";

type Game = {
    teams: any;
    ships: any[];
    options: {
        teams?: any[];
    };
};

type API = {
    compressWSMessages: boolean;
    mod_data: {
        options: Record<string, any>;
        optionsLocked: boolean;
        teams?: TeamManager;
    };
    stopTriggered: boolean;
    triggerStopEvent: () => void;
};

const readBinaries = function (data: ArrayBuffer, game: Game): void {
    let dataView = new DataView(data), eventID = dataView.getUint8(0);
    dataView = new DataView(data.slice(1));
    switch (eventID) {
        case eventIDs.STATION_UPDATE:
            game.teams.socketUpdate(dataView);
            break;
    }
};

const eventIDs = {
    STATION_UPDATE: 205
};

class GameClient {
    #game: Game;
    #api: API;
    socket?: GameSocket;

    constructor(game: Game, api: API) {
        this.#game = game;
        this.#api = api;
    }

    /**
     * Connects to the game server.
     * @param {string} ip - The IP address of the server.
     * @param {string} id - The preferred ID for the connection.
     * @param {number} port - The port of the server.
     * @param {string} joinPacketName - The name of the join packet.
     */
    connect(ip: string, id: string, port: number, joinPacketName: string): void {
        const socket = this.socket = GameSocket.create(ip, port, null, this.#api.compressWSMessages);
        let interval: NodeJS.Timeout | undefined;
        const game = this.#game;
        const api = this.#api;
        let ended = false;

        socket.on("open", function () {
            this.send(JSON.stringify({
                name: joinPacketName,
                data: {
                    player_name: "starblast-modding",
                    preferred: id
                }
            }));
        });

        socket.on("message", function (event: any, isBinary: boolean) {
            if (socket.requestClose) {
                if (!ended) {
                    socket.close();
                    ended = true;
                }
                return;
            }

            if (!isBinary) {
                let parsed: any;
                try {
                    parsed = JSON.parse(event.toString()) ?? {};
                } catch (e) {
                    parsed = {};
                }
                const data = parsed.data;
                switch (parsed.name) {
                    case "welcome":
                        Object.assign(api.mod_data.options, {
                            map_name: data.name,
                            map_id: data.seed
                        });
                        deepFreeze(api.mod_data.options);
                        api.mod_data.optionsLocked = true;
                        for (const ship of game.ships) {
                            socket.send(JSON.stringify({
                                name: "get_name",
                                data: {
                                    id: ship.id
                                }
                            }));
                        }
                        interval = setInterval(() => socket.send(0), 1000);
                        break;
                    case "player_name":
                        data.customization = defineProperties({}, {
                            badge: data.custom?.badge ?? null,
                            finish: data.custom?.finish ?? "zinc",
                            laser: data.custom?.laser ?? "0"
                        });
                        getEntity(game, data, game.ships).update(data, true);
                        break;
                }
            } else {
                try {
                    if (typeof event.arrayBuffer === "function") {
                        event.arrayBuffer().then(e => readBinaries.call(this, e, game));
                    } else {
                        readBinaries.call(this, event.buffer.slice(event.byteOffset, event.byteOffset + event.byteLength), game);
                    }
                } catch (e) {}
            }
        }.bind(this));

        socket.on("close", function () {
            if (interval != null) clearInterval(interval);
            api.triggerStopEvent();
        });
    }

    /**
     * Initializes team statistics for the game.
     */
    initTeamStats(): void {
        if (this.#api.stopTriggered) return;

        const teams = JSON.parse(JSON.stringify(this.#game.options.teams ?? null));
        if (Array.isArray(teams)) {
            const teamManager = new TeamManager(this.#game, this.#api);
            teamManager.insert(...teams.map((team, i) => Object.assign({}, team, { id: i })));
            this.#api.mod_data.teams = teamManager;
        }
    }
}

export default GameClient;