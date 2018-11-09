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
    "#C": buildPath('config'),
    "#M": buildPath('main'),
    "#P": buildPath('provide'),
    "#R^components": buildPath('renderer', 'components'),
    "#R^style": buildPath('renderer', 'style'),
    "#R^util": buildPath('renderer', 'util'),
    "#R~execute": buildPath("renderer", "scene", "execute"),
};