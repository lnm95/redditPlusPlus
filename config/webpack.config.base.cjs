const path = require('path');

const WebpackStringReplacer = require('webpack-string-replacer');

const webpackConfig = {
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@resources': path.resolve(__dirname, '../resources')
        }
    },
    optimization: {
        minimize: false,
        moduleIds: 'named'
    },
    entry: './src/core.ts',
    output: {
        clean: false,
        path: path.resolve(__dirname, process.env.npm_config_release ? '../public' : '../dist')
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.m?ts$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.less$/,
                use: ['css-loader', 'less-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: []
};

// cleanup removed modules
webpackConfig.plugins.push(
    new WebpackStringReplacer({
        logAroundPatternMatches: 200,
        rules: [
            {
                applyStage: 'optimizeChunkAssets',
                outputFileInclude: /\.js$/,
                replacements: [
                    {
                        pattern: 'if (false) {}',
                        replacement: ''
                    }
                ]
            }
        ]
    })
);

module.exports = webpackConfig;
