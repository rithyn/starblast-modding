'use strict';

/**
 * The Map Instance with a few array methods
 * @extends {Map} - The built-in {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map|Map} object.
 * @abstract
 */
class ArrayMap<K, V> extends Map<K, V> {
    constructor(...args: [Iterable<[K, V]>?]) {
        super(...args);
    }

    /**
     * Get element at index, Equivalent to `Array.prototype.at`
     * @param {number} index - The index of the element to retrieve.
     * @returns {V | undefined} The value at the specified index.
     */
    at(index: number): V | undefined {
        return this.toArray().at(index);
    }

    /**
     * Get an array from this object
     * @returns {V[]} An array of the values in the map.
     */
    toArray(): V[] {
        return [...this.values()];
    }

    /**
     * Length of this object, same as `Map.prototype.size`
     * @type {number}
     * @readonly
     */
    get length(): number {
        return this.size;
    }

    /**
     * Set a value in the map using its `uuid` property as the key.
     * @param {V & { uuid: K }} value - The value to set, which must have a `uuid` property.
     * @returns {this} The map instance.
     */
    _UUIDset(value: V & { uuid: K }): this {
        Map.prototype.set.call(this, value?.uuid, value);
        return this;
    }

    /**
     * Default iterator for the map, iterates over the values.
     * @returns {IterableIterator<V>} An iterator for the values in the map.
     */
    [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.entries();
    }

    /**
     * Convert the map to a JSON-compatible array.
     * @returns {V[]} An array of the values in the map.
     */
    toJSON(): V[] {
        return this.toArray();
    }
}

export default ArrayMap;