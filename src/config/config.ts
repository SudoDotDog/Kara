/**
 * @author WMXPY
 * @namespace Config
 * @fileoverview Config
 */

export default {
    isDebug: true,
    backgroundColor: 'white',
    center: {
        devURL: 'http://localhost:8083',
        prodURL: `file://${__dirname}/../renderer/scene/center/index.html`,
    },
    execute: {
        devURL: 'http://localhost:8082',
        prodURL: `file://${__dirname}/../renderer/scene/execute/index.html`,
    },
    scepter: {
        devURL: 'http://localhost:8081',
        prodURL: `file://${__dirname}/../renderer/scene/scepter/index.html`,
    },
    shortcut: 'CommandOrControl+Shift+`',
};
