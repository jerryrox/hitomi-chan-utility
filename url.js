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
 * Returns the url of a json file that contains tag metadata.
 */
function getTagsUrl() {
    return `${getBaseUrl()}/tags.json`;
}

/**
 * Returns the url of a javascript file that contains a gallery's page information.
 */
function getPageInfoUrl(galleryId) {
    return `${getBaseUrl()}/galleries/${galleryId}.js`;
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
    getTagsUrl,
    getPageInfoUrl,
    getGalleryUrl,
    getPageFileUrl,
    getBigThumbUrl,
    getSmallThumbUrl
};