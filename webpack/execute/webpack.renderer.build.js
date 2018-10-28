/**
 * @author WMXPY
 * @namespace Webpack
 * @description Execute Renderer Production
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', '..', 'app', 'renderer', 'scene', 'execute');
const APP_DIR = path.resolve(__dirname, '..', '..', 'src', 'renderer', 'scene', 'execute');
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public', 'template.html');
const RENDERER_TSCONFIG_DIR = path.resolve(__dirname, '..', '..', 'typescript', 'tsconfig.renderer.dev.json');

let config = {
    devtool: 'cheap-source-map',
    target: 'electron-renderer',
    mode: 'production',
    entry: {
        index: APP_DIR + "/index.tsx",
    },
    output: {
        filename: "[name].bundle.js",
        path: BUILD_DIR,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass"],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: RENDERER_TSCONFIG_DIR,
                    },
                }],
            },
            {
                test: /\.sass$/,
                use: [{
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            sass: true,
                            localIdentName: "[name]_[local]__[hash:base64:5]"
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                        },
                    },
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    plugins: [
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