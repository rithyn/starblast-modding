'use strict';

import URLFetcher from "./URLFetcher";

const scriptRegex = /<script>([^]+?)<\/script>/g;
const joinParamSearcher = /"ecp_verified".+?socket\.onopen\s*=.+?\.send.+?name:([^]+?),data:/;
const parseValue = function (str: string): string {
    return JSON.parse(String(str).replace(/^('|`)(.+)\1$/, '"$2"'));
};
const getJoinPacketName = async function (): Promise<string> {
    let scripts = await URLFetcher("https://starblast.io");

    // Get all contents inside script tags
    scripts = scripts.match(scriptRegex)?.map?.(e => e.replace(scriptRegex, "$1")) ?? [];

    // Get the last script (game script) [Process 1]
    let gameScript = scripts.at(-1) ?? null;

    if (gameScript == null) throw new Error("Failed to get join message packet name. [Process 1]");

    gameScript = String(gameScript);

    // Get the variable and its attribute name of join packet message [Process 2]
    let joinPacketVariable = gameScript.match(joinParamSearcher)?.[1] ?? null;

    if (joinPacketVariable == null) throw new Error("Failed to get join message packet name. [Process 2]");

    // If it appears to be a value, return it
    try {
        return parseValue(joinPacketVariable);
    } catch (e) {
        // Continue to the next process
    }

    let [obfVar, obfAttr] = String(joinPacketVariable).split(".");

    // Search through script to get the value of it [Process 3]
    let joinPacketName = gameScript.match(new RegExp(`${obfVar}=.+?${obfAttr}:([^]+?),([lI10O]{5}:|\\})`))?.[1];

    try {
        if (joinPacketName == null) throw "null";
        return parseValue(joinPacketName);
    } catch (e) {
        throw new Error("Failed to get join message packet name. [Process 3]");
    }
};

export default getJoinPacketName;