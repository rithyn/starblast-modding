'use strict';

import { WebSocket } from "ws";

type GameSocketOptions = {
    ip: string;
    port?: string;
    origin?: string;
    perMessageDeflate?: boolean;
};

const GameSocket: { [key in Extract<keyof typeof WebSocket, string | number | symbol>]?: any } & {
    create(ip: string, port?: string, origin?: string, perMessageDeflate?: boolean): WebSocket;
} = {
    create(ip: string, port?: string, origin?: string, perMessageDeflate?: boolean): WebSocket {
        ip = (ip || "").replace(/\./g, "-");
        port = port || "";
        return new WebSocket(`wss://${ip}.starblast.io:${port}/`, {
            origin: origin ?? "https://starblast.io",
            perMessageDeflate: !!perMessageDeflate
        });
    }
};
(['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'] as const).forEach((state) => {
    GameSocket[state] = WebSocket[state];
});

export default GameSocket;