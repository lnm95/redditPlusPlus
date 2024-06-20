const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { UserScriptMetaDataPlugin } = require('userscript-metadata-webpack-plugin');

const metadata = require('./metadata.cjs');
const webpackConfig = require('./webpack.config.base.cjs');


if(!process.env.npm_config_release){
    metadata.name = {
        $: 'Reddit++ Preview',
        ru: 'Reddit++ Preview'
    };

    metadata.namespace = metadata.namespace + `Preview`;
}

const cfg = merge(webpackConfig, {
    mode: 'production',
    output: {
        filename: process.env.npm_config_release ? 'redditPlusPlus.user.js' : 'redditPlusPlus.preview.user.js'
    },
    optimization: {
        usedExports: true
    },
    cache: {
        type: 'filesystem',
        name: 'prod'
    },
    plugins: [
        new UserScriptMetaDataPlugin({
            metadata
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(process.env.npm_package_version),
            DEBUG: JSON.stringify(false)
        })
    ]
});

module.exports = cfg;
