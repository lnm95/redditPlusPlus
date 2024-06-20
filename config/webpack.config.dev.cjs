const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { UserScriptMetaDataPlugin } = require('userscript-metadata-webpack-plugin');

const metadata = require('./metadata.cjs');
const webpackConfig = require('./webpack.config.base.cjs');

metadata.name = {
    $: 'Reddit++ Debug',
    ru: 'Reddit++ Debug'
};

metadata.namespace = metadata.namespace + `Debug`;

metadata.require.push('file://' + path.resolve(__dirname, '../dist/redditPlusPlus.debug.js'));

const cfg = merge(webpackConfig, {
    mode: 'development',
    cache: {
        type: 'filesystem',
        name: 'dev'
    },
    entry: {
        debug: webpackConfig.entry,
        'dev.user': path.resolve(__dirname, './empty.cjs')
    },
    output: {
        filename: 'redditPlusPlus.[name].js'
    },
    devtool: 'eval-source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        new UserScriptMetaDataPlugin({
            metadata
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(process.env.npm_package_version),
            DEBUG: JSON.stringify(true)
        })
    ]
});

module.exports = cfg;
