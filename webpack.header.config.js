const path = require('path');

module.exports = {
    entry: './src/header/index.js',
    output: {
        filename: 'index.js',
        chunkFilename: '[name].index.js',
        path: path.resolve(__dirname, 'public/header'),
        publicPath: '/header/',
        // https://webpack.js.org/configuration/output/#outputjsonpfunction
        jsonpFunction: 'mfWebpackJsonp'
    },
    module: {
        rules: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    }
};
