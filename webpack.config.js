const path = require('path');
const webpack = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: [
        'whatwg-fetch',
        './src/main.js',
        './src/main.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s?[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: !devMode,
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        importer: jsonImporter,
                    },
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'postcss-loader'
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                enforce: 'pre',
                loader: 'import-glob-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    node: {
        fs: 'empty',
    },
};

if (!devMode) {
    const Services = require('./src/generic/services');
    const allRoutes = Services.getAllRoutes();

    module.exports.mode = 'production';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            }
        }),
        new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: allRoutes,
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                keepClosingSlash: true,
                sortAttributes: true,
            },
        }),
    ]);
}
