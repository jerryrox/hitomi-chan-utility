const PageInfo = require("./classes/PageInfo");

/**
 * Parses specified rawData to an array of objects containing all pages' metadata in a gallery.
 * @param {string} rawData 
 * @returns {Array<PageInfo>}
 */
function parsePageInfo(rawData) {
    const [contents] = rawData.match(/\[[\s\S]+\]/) || [];
    if (typeof contents !== 'string')
        return [];
    return JSON.parse(contents);
}

module.exports = {
    parsePageInfo
};