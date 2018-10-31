/**
 * @author WMXPY
 * @namespace Webpack
 * @description Alias
 */

const Path = require('path');

const buildPath = (...path) => {
    return Path.join(__dirname, '..', 'src', ...path);
};

module.exports = {
    "#R~execute": buildPath("renderer", "scene", "execute"),
};