const path = require('path');

module.exports = {
    entry: './index.js',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'flare-client',
        libraryTarget: 'umd',
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },

    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
};