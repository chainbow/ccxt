const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './js/ccxt.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ccxt.browser.js',
        library: 'ccxt',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    mode: 'production',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'ts'),
        }
    },
    optimization: {
        minimize: false,
    },
};
