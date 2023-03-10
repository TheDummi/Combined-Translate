"use strict";

import getLanguages from "./getLanguages.js";

/**
 * A function to get the language name by it's ISO code
 * @param {string} code - The ISO code of the language
 * @returns language name
 */
export default function getLanguageByCode(code: string) {
    if (typeof code !== "string") throw new Error("Can't find language by non-string values.")

    return getLanguages().languagesByCode[
        `${code.split(/-/g)[0].toLowerCase()}${code.split(/-/g)[1]
            ? `-${code.split(/-/g)[1].toUpperCase()}`
            : ""
        }`
    ] || null;
}