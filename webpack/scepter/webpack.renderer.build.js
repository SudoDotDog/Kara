/**
 * @author WMXPY
 * @namespace Webpack
 * @description Scepter Renderer Production
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', '..', 'app', 'renderer', 'scene', 'scepter');
const APP_DIR = path.resolve(__dirname, '..', '..', 'src', 'renderer', 'scene', 'scepter');
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public', 'template.html');
const RENDERER_TSCONFIG_DIR = path.resolve(__dirname, '..', '..', 'typescript', 'tsconfig.renderer.dev.json');

const config = {
    devtool: 'cheap-source-map',
    target: 'electron-renderer',
    mode: 'production',
    optimization: require('../common/optimization'),
    entry: {
        index: APP_DIR + "/index.tsx",
    },
    output: {
        filename: "[name].bundle.js",
        path: BUILD_DIR,
    },
    resolve: {
        alias: require('../alias'),
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass"],
    },
    module: {
        rules: [
            require('../common/ts')(RENDERER_TSCONFIG_DIR),
            ...require('../common/sass.build'),
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            title: 'Kara',
            template: PUBLIC_DIR,
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
};

module.exports = config;