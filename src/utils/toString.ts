'use strict';
/**
 * Converts a value to a string.
 * @param {unknown} value - The value to convert.
 * @returns {string} The string representation of the value.
 */

export default function toString(value: unknown): string {
    try {
        return String(value);
    } catch (e) {
        try {
            return JSON.stringify(value);
        } catch (e) {
            return "";
        }
    }
}