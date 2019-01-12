/**
 * Returns the location prefix string that corresponds to specified gallery id.
 */
function getLocationPrefix(galleryId) {
    // Mimic hitomi's implementation of cdn prefix parsing.
    let prefix = "a";
    let frontendCount = 2;
    let result = /\/\d*(\d)\//.exec(galleryId);
    if(!result) {
        return prefix;
    }
    var lastDigit = parseInt(result[1], 10);
    if(isNaN(lastDigit)) {
        return prefix;
    }
    if(lastDigit === 1) {
        lastDigit = 0;
    }
    return String.fromCharCode(lastDigit % frontendCount + 97);
}

/**
 * Returns the base prefix string that corresponds to isMeta flag.
 */
function getBasePrefix(isMeta) {
    return isMeta ? "tn" : "a";
}

/**
 * Returns the combined output of getLocationPrefix and getBasePrefix.
 */
function getFullPrefix(galleryId, isMeta) {
    return `${getLocationPrefix(galleryId)}${getBasePrefix(isMeta)}`;
}

/**
 * Returns the prefix used for gallery info.
 */
function getGalleryInfoPrefix() {
    return "ltn";
}

module.exports = {
    getLocationPrefix,
    getBasePrefix,
    getFullPrefix,
    getGalleryInfoPrefix
};