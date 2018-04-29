const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    mode: 'development',
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
    const navigationData = require('./content/navigation.json');
    let clipRoutes = [];

    navigationData.forEach(item => {
        const clipsData = `./content/clips${item.route}.json`;

        if (item.player && fs.existsSync(clipsData)) {
            const clips = require(clipsData);
            const routes = clips.map(clip => `${item.route}/${Services.seoUrl(clip.title)}`);

            clipRoutes = clipRoutes.concat(routes);
        }
    });

    module.exports.mode = 'production';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: appRoutes.concat(clipRoutes),
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
