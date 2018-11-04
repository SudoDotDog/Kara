/**
 * @author WMXPY
 * @namespace Config
 * @fileoverview Config
 */

console.log(__dirname);
export default {
    isDebug: true,
    backgroundColor: 'white',
    scepter: {
        devURL: 'http://localhost:8081',
        prodURL: `file://${__dirname}/../renderer/scene/scepter/index.html`,
    },
    execute: {
        devURL: 'http://localhost:8082',
        prodURL: `file://${__dirname}/../renderer/scene/execute/index.html`,
    },
};
