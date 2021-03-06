/**
 * @author WMXPY
 * @namespace Webpack
 * @description Scepter Renderer Development
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '..', '..', 'src', 'renderer', 'scene', 'scepter');
const BUILD_DIR = path.resolve(__dirname, '..', '..', 'app', 'renderer', 'scene', 'scepter');
const RENDERER_TSCONFIG_DIR = path.resolve(__dirname, '..', '..', 'typescript', 'tsconfig.renderer.dev.json');

const config = {
    devtool: 'cheap-module-eval-source-map',
    target: "electron-renderer",
    mode: "development",
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            APP_DIR + "/index.tsx",
        ],
    },
    output: {
        filename: "[name].bundle.js",
        path: BUILD_DIR,
        publicPath: '/',
    },
    resolve: {
        alias: require('../alias'),
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass"],
    },
    module: {
        rules: [
            require('../common/ts')(RENDERER_TSCONFIG_DIR),
            ...require('../common/sass.dev'),
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ]
    },
    plugins: [
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            title: 'Script Editor - Kara',
            template: require('../common/dirs').HTML_TEMPLATE_DIR,
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'app', 'renderer'),
        publicPath: '/',
        port: 8081,
        inline: true,
        historyApiFallback: true
    },
};

module.exports = config;