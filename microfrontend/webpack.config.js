require('dotenv').config();

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        chunkFilename: '[name].index.js',
        path: path.resolve(__dirname, 'public'),

        // Asset URLs have to be absolute, because you'll never know on which URL the microfrontend will be served.
        publicPath: `${process.env.URL}/`,

        // `webpackJsonp` has to be renamed, or there may be conflicts with other webpack bundles.
        jsonpFunction: `${process.env.NAMESPACE}WebpackJsonp`
    },
    module: {
        rules: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NAMESPACE': JSON.stringify(process.env.NAMESPACE),
            'process.env.CONTEXT': JSON.stringify(process.env.CONTEXT)
        })
    ]
};
