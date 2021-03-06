/**
 * @author WMXPY
 * @namespace Webpack
 * @description Center Renderer Development
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '..', '..', 'src', 'renderer', 'scene', 'center');
const BUILD_DIR = path.resolve(__dirname, '..', '..', 'app', 'renderer', 'scene', 'center');
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
            title: 'Command Center - Kara',
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
        contentBase: BUILD_DIR,
        publicPath: '/',
        port: 8083,
        inline: true,
        historyApiFallback: true
    },
};

module.exports = config;