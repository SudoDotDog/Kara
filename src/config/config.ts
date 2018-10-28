/**
 * @overview generated by ghoti-cli
 * @fileoverview Config
 */

console.log(__dirname);
export default {
    isDebug: true,
    backgroundColor: 'white',
    scepter: {
        devURL: 'http://localhost:8080',
        prodURL: `file://${__dirname}/../renderer/scene/scepter/index.html`,
    },
    execute: {
        devURL: 'http://localhost:8080',
        prodURL: `file://${__dirname}/../renderer/scene/execute/index.html`,
    },
};
