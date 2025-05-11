'use strict';

import toString from "./toString.js";

type VerificationResult = {
    success: boolean;
    value: number[] | string;
};

/**
 * Verifies and normalizes a UI position array.
 * @param {any} array - The input array to verify.
 * @param {boolean} [strictMode=false] - Whether to enforce strict validation.
 * @returns {VerificationResult} An object containing the success status and the verified or default value.
 */
export default function UIPositionVerifier(array: any, strictMode: boolean = false): VerificationResult {
    if (!Array.isArray(array)) {
        if (strictMode) {
            return { success: false, value: `Given position value is not an array: ${toString(array)}` };
        }
        return { success: true, value: [0, 0, 0, 0] };
    }

    let res: number[] = [];
    for (let i = 0; i < 4; ++i) {
        if (typeof array[i] !== "number" || isNaN(array[i])) {
            if (strictMode) {
                return {
                    success: false,
                    value: `Invalid position value (not a number) at index ${i}: ${toString(array)}`
                };
            }
            res.push(0);
        } else {
            res.push(array[i]);
        }
    }

    return { success: true, value: res };
}