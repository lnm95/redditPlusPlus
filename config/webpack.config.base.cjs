const path = require('path');

const webpackConfig = {
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@resources': path.resolve(__dirname, '../resources')
        }
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000
    },
    optimization: {
        minimize: false,
        moduleIds: 'named'
    },
    entry: './src/core.ts',
    output: {
        clean: false,
        path: path.resolve(__dirname, '../dist')
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

module.exports = webpackConfig;
