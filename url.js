const cdn = require("./cdn");

/**
 * Returns the base url of hitomi.la
 */
function getBaseUrl(cdn = null) {
    if(cdn === null)
        return "https://hitomi.la";
    return `https://${cdn}.hitomi.la`;
}

/**
 * Returns the base stream url of hitomi.la
 */
function getStreamingUrl() {
    return "https://streaming.hitomi.la";
}

/**
 * Returns the url of a json file that contains tag metadata.
 */
function getTagsUrl() {
    return `${getBaseUrl()}/tags.json`;
}

/**
 * Returns the url of a javascript file that contains a gallery's page information.
 */
function getPageInfoUrl(galleryId) {
    return `${getBaseUrl(cdn.getGalleryInfoPrefix())}/galleries/${galleryId}.js`;
}

/**
 * Returns the url that links to original hitomi.la gallery.
 */
function getGalleryUrl(galleryId) {
    return `${getBaseUrl()}/galleries/${galleryId}.html`;
}

/**
 * Returns the url of an image file that represents a page in gallery with specified values.
 */
function getPageFileUrl(galleryId, fileName) {
    return `${getBaseUrl(cdn.getFullPrefix(galleryId, false))}/galleries/${galleryId}/${fileName}`;
}

/**
 * Returns the url of a video file that represents an anime in gallery with specified values.
 * @param {string} galleryName
 */
function getAnimeFileUrl(galleryName) {
    let fileName = galleryName.toLowerCase()
        .replace(/ {0,}- {0,}/g, "-") // Hyphens (code 45) should not be surrounded by any space character.
        .replace(/ {0,}– {0,}/g, "-") // Hyphens (code 8211) should not be surrounded by any space character.
        .replace(/ +/g, "-") // Replace empty spaces with hyphens.
        .replace(/[^A-Za-z0-9-]/g, ""); // Remove all non-alphanumeric characters.
    return `${getStreamingUrl()}/videos/${fileName}.mp4`;
}

/**
 * Returns the url of an image file that represents the big thumbnail of a page with specified values. The only valid parameter for "fileName" is the first page name retrieved from getPageInfoUrl.
 */
function getBigThumbUrl(galleryId, fileName) {
    return `${getBaseUrl(cdn.getBasePrefix(true))}/bigtn/${galleryId}/${fileName}.jpg`;
}

/**
 * Returns the url of an image file that represents the small thumbnail of a page with specified values.
 */
function getSmallThumbUrl(galleryId, fileName) {
    return `${getBaseUrl(cdn.getFullPrefix(galleryId, true))}/smalltn/${galleryId}/${fileName}.jpg`;
}

module.exports = {
    getBaseUrl,
    getStreamingUrl,
    getTagsUrl,
    getPageInfoUrl,
    getGalleryUrl,
    getPageFileUrl,
    getAnimeFileUrl,
    getBigThumbUrl,
    getSmallThumbUrl
};