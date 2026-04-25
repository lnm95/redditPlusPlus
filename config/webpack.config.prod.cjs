const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { UserScriptMetaDataPlugin } = require('userscript-metadata-webpack-plugin');

const metadata = require('./metadata.cjs');
const webpackConfig = require('./webpack.config.base.cjs');

const cfg = merge(webpackConfig, {
    mode: 'production',
    output: {
        filename: 'redditPlusPlus.user.js'
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

class RPPCompactifyPlugin {
    apply(compiler) {
        compiler.hooks.thisCompilation.tap('RPPCompactifyPlugin', compilation => {
            compilation.hooks.processAssets.tap(
                {
                    name: 'RPPCompactifyPlugin',
                    stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
                },
                assets => {
                    for (const name in assets) {
                        if (!name.endsWith('.js')) continue;

                        let source = assets[name].source();

                        source = source.replace(/^\s*if \(false\) \/\/ removed by dead control flow\s*\r?\n\s*\{\}$/gm, '');
                        source = source.replace(/^\/\/ EXTERNAL MODULE: .*$/gm, ``);
                        source = source.replace(/\/\*.*?\*\//g, ``);
                        source = source.replace(/\n{3,}/g, `\n\n`);

                        compilation.updateAsset(name, new compiler.webpack.sources.RawSource(source));
                    }
                }
            );
        });
    }
}

cfg.plugins.push(new RPPCompactifyPlugin());

module.exports = cfg;
