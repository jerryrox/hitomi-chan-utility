/**
 * Returns the location prefix string that corresponds to specified gallery id.
 */
function getLocationPrefix(galleryId) {
    let id = Number(galleryId);
    if(isNaN(id))
        id = 0;
    return id % 2 === 1 ? "b" : "a";
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