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
const COMMON_SASS_DIR = path.resolve(__dirname, '..', '..', 'src', 'renderer', 'style', 'common');
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public', 'template.html');
const RENDERER_TSCONFIG_DIR = path.resolve(__dirname, '..', '..', 'typescript', 'tsconfig.renderer.dev.json');

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
                exclude: COMMON_SASS_DIR,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            sass: true,
                            localIdentName: "[name]_[local]__[hash:base64:5]"
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.sass$/,
                include: COMMON_SASS_DIR,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                        },
                    },
                ],
            },
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
            title: 'Kara',
            template: PUBLIC_DIR,
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