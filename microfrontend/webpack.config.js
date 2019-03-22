require('dotenv').config();

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        chunkFilename: '[name].index.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: `${process.env.URL}/`,
        // https://webpack.js.org/configuration/output/#outputjsonpfunction
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
