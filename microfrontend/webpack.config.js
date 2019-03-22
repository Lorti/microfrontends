const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        chunkFilename: '[name].index.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:3000/',
        // https://webpack.js.org/configuration/output/#outputjsonpfunction
        jsonpFunction: 'microfrontendWebpackJsonp'
    },
    module: {
        rules: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    }
};
