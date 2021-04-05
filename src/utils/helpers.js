/**
 * Check if the input value is undefined or null
 *
 * @param input
 * @return {boolean}
 */
export const isUndefinedOrNull = input => input === undefined || input === null;

/**
 * Check if the input value is an empty string
 *
 * @param input
 * @return {boolean}
 */
export const isEmptyString = input => typeof input === "string" && input.length === 0;

