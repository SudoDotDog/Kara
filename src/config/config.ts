/**
 * @author WMXPY
 * @namespace Config
 * @fileoverview Config
 */

export default {
    backgroundColor: 'white',
    scepter: {
        devURL: 'http://localhost:8081',
        prodURL: `file://${__dirname}/../renderer/scene/scepter/index.html`,
    },
    execute: {
        devURL: 'http://localhost:8082',
        prodURL: `file://${__dirname}/../renderer/scene/execute/index.html`,
    },
    center: {
        devURL: 'http://localhost:8083',
        prodURL: `file://${__dirname}/../renderer/scene/center/index.html`,
    },
    shortcut: 'CommandOrControl+Shift+`',
};
