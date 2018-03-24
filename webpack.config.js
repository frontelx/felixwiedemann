const path = require('path');
const webpack = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    entry: [
        'whatwg-fetch',
        './src/main.js',
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js'),
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
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
};

if (process.env.NODE_ENV === 'production') {
    const Services = require('./src/generic/services');
    const appRoutes = Services.getAppRoutes();

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: appRoutes,
        }),
    ]);
}
