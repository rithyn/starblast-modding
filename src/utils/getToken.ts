'use strict';

import _GameSocket from "./GameSocket";

type Address = {
    ip: string;
    port: string;
};

/**
 * Retrieves a modding token from the server using the specified ECP key.
 * @param {Address} address - The server address containing the IP and port.
 * @param {string} ECPKey - The ECP key to validate.
 * @param {boolean} perMessageDeflate - Whether to enable per-message deflate compression.
 * @returns {Promise<string>} A promise that resolves with the modding token.
 * @throws Will throw an error if the connection or validation fails.
 */
export default function getToken(
    address: Address,
    ECPKey: string,
    perMessageDeflate: boolean
): Promise<string> {
    let success = false;
    const socket = _GameSocket.create(address.ip, address.port, null, perMessageDeflate);

    socket.onopen = function () {
        this.send(
            JSON.stringify({
                name: "modding_token",
                data: {
                    ecp_key: ECPKey
                }
            })
        );
    };

    return new Promise<string>(function (resolve, reject) {
        socket.onmessage = function (event) {
            let data = event.data;
            if (typeof data === "string") {
                try {
                    data = JSON.parse(data);
                } catch (e) {
                    // Ignore JSON parsing errors
                }
                if (data.name === "token") {
                    success = true;
                    socket.close();
                    resolve(data.data.token);
                }
            }
        };

        socket.onerror = function () {
            success = true;
            reject(new Error("Failed to connect to the server"));
        };

        socket.onclose = function () {
            if (!success) {
                reject(new Error("Failed to validate the specified ECP key"));
            }
        };
    });
}