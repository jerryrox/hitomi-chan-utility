/**
 * Returns the location prefix string that corresponds to specified gallery id.
 */
function getLocationPrefix(galleryId) {
    return String(galleryId).substr(-1) === "1" ? "b" : "a";
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

module.exports = {
    getLocationPrefix,
    getBasePrefix,
    getFullPrefix
};