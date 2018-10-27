/**
 * @author WMXPY
 * @namespace Webpack
 * @description Renderer Development
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', 'app', 'renderer');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'renderer');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public', 'template.html');
const RENDERER_TSCONFIG_DIR = path.resolve(__dirname, '..', 'typescript', 'tsconfig.renderer.dev.json');

let config = {
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
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            title: 'Kara',
            template: PUBLIC_DIR,
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
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
        port: 8080,
        inline: true,
        historyApiFallback: true
    },
};

module.exports = config;