'use strict';
export default function limitedJSON<T>(obj: T, properties: Array<keyof T> = []): Partial<T> {
    let res: Partial<T> = {};
    for (let k of properties) {
        res[k] = obj[k];
    }
    return res;
}