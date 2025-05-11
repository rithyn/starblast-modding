'use strict';

import PrivateServerFinder from "./PrivateServerFinder.js";
import EventManager from "../managers/EventManager.js";
import getToken from "./getToken.js";

type ModdingObject = {
    configuration: {
        region: string;
        ECPKey: string;
    };
    compressWSMessages: boolean;
};

/**
 * Runs the mod by finding a private server, retrieving a token, and creating an event manager.
 * @param {ModdingObject} obj - The modding object containing configuration and options.
 * @returns {Promise<any>} A promise that resolves with the created event manager.
 */
export default async function runMod(obj: ModdingObject): Promise<any> {
    let address = await PrivateServerFinder(obj.configuration.region);
    return await EventManager.create(
        obj,
        address,
        await getToken(address, obj.configuration.ECPKey, obj.compressWSMessages)
    );
}