export default function defineProperties<T>(
    obj: T,
    properties: Record<string, any>,
    enumerable: boolean = true
): T {
    for (let key in properties) {
        properties[key] = {
            value: properties[key],
            enumerable: !!enumerable,
            configurable: false,
            writable: false
        };
    }
    return Object.defineProperties(obj, properties);
}