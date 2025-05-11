'use strict';

import URLFetcher from "./URLFetcher";

type Server = {
    modding: boolean;
    location: string;
    usage: {
        cpu: number;
    };
    address: string;
};

type ServerAddress = {
    ip: string;
    port: string;
};

/**
 * Finds a private server in the specified region with the lowest CPU usage.
 * @param {string} region - The region to search for a server.
 * @returns {Promise<ServerAddress>} The IP and port of the selected server.
 * @throws Will throw an error if the server listing cannot be fetched or is malformed.
 */
export default async function PrivateServerFinder(region: string): Promise<ServerAddress> {
    let servers: Server[], server: Server | undefined;

    try {
        servers = await URLFetcher("https://starblast.io/simstatus.json");
    } catch (e) {
        throw new Error("Failed to connect to server listing");
    }

    try {
        server = servers
            .filter(server => server.modding && server.location === region)
            .sort((a, b) => a.usage.cpu - b.usage.cpu)[0];
    } catch (e) {
        throw new Error("Server listing malformed or updated");
    }

    if (!server) throw new Error("Could not find any servers with the specified region");

    let data = server.address.split(":");
    return { ip: data[0], port: data[1] };
}