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
    "#S": Path.join(__dirname, '..', 'style'),
    "#U": buildPath('mutate'),
    "#R^components": buildPath('renderer', 'components'),
    "#R^util": buildPath('renderer', 'util'),
    "#R~center": buildPath("renderer", "scene", "center"),
    "#R~execute": buildPath("renderer", "scene", "execute"),
};