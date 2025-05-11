'use strict';
const fieldCounts = 4;

/**
 * Parses a number into a hex color string in ARGB or RGB format.
 * @param {number} n - The number to parse.
 * @returns {string} The parsed hex color string.
 */
const parseColor = function (n: number): string {
    // Parse hex color either to ARGB or RGB format
    // This actually works with NaN; it just returns black hex
    let value = [0, 0, 0, 0];

    for (let i = 0; i < fieldCounts; ++i) {
        let byte = n & 0xff;
        if (byte === 0) break;
        value[fieldCounts - i - 1] = byte;
        n >>= 8;
    }

    // If alpha channel is 0 (<=6 digits used), skip the alpha channel
    if (value[0] === 0) value.shift();

    return "#" + value.map(e => e.toString(16).padStart(2, "0")).join("");
};

/**
 * Converts a color value to a string, ensuring it is in a valid format.
 * @param {number | string | null} color - The color value to convert.
 * @param {boolean} strictMode - Whether to enforce strict type checking.
 * @param {string} defaultColor - The default color to use if `color` is null.
 * @param {string} [field="color"] - The name of the field for error messages.
 * @returns {string} The color as a string.
 * @throws Will throw an error if `strictMode` is enabled and the color is invalid.
 */
export default function (
    color: number | string | null,
    strictMode: boolean,
    defaultColor: string,
    field: string = "color"
): string {
    if (color == null) color = defaultColor;

    if (typeof color === "number") color = parseColor(color);

    if (typeof color !== "string") {
        if (strictMode) {
            throw new Error(
                `Expects ${field} to be either a string or number. Got ${JSON.stringify(color)} instead.`
            );
        }
        color = JSON.stringify(color);
    }

    return color;
}