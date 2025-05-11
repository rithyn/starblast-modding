'use strict';

import EntityManager from "./EntityManager.js";
import Alien from "../structures/Alien.js";
import { Game } from "../types/Game";
import { API } from "../types/API";  

/**
 * The Alien Manager Instance.
 * @extends {EntityManager}
 * @abstract
 */
class AlienManager extends EntityManager {
    #game: Game;

    constructor(game: Game, api: API) {
        super(game, api);
        this.#game = game;
    }

    /**
     * The maximum number of aliens allowed.
     * @type {number}
     */
    get limit(): number {
        return 300;
    }

    [Symbol.toStringTag] = 'AlienManager';
    manager_name = "alien";
    StructureConstructor = Alien;
}

export default AlienManager;