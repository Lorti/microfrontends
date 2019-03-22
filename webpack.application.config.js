const path = require('path');

module.exports = {
    entry: './src/application/index.js',
    output: {
        filename: 'index.js',
        chunkFilename: '[name].index.js',
        path: path.resolve(__dirname, 'public/application'),
        publicPath: '/application/',
    }
};
