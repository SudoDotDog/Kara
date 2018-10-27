/**
 * @author WMXPY
 * @namespace Webpack
 * @description Electron Development
 */

const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', 'app', 'main');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'main');
const TSCONFIG_DIR = path.resolve(__dirname, 'tsconfig.main.dev.json');

let config = {
    devtool: 'cheap-module-eval-source-map',
    entry: APP_DIR + "/index.ts",
    mode: "development",
    target: "electron-main",
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    node: {
        __dirname: false
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: TSCONFIG_DIR
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};

module.exports = config;