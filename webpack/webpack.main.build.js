/**
 * @author WMXPY
 * @namespace Webpack
 * @description Electron Production
 */

const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', 'app', 'main');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'main');
const TSCONFIG_DIR = path.resolve(__dirname, '..', 'typescript', 'tsconfig.main.build.json');

const config = {
    entry: APP_DIR + "/index.ts",
    mode: "production",
    target: "electron-main",
    output: {
        filename: "bundle.js",
        path: BUILD_DIR,
    },
    node: {
        __dirname: false,
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: TSCONFIG_DIR,
                },
            }],
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
};

module.exports = config;