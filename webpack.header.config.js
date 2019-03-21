const path = require('path');

module.exports = {
    entry: './src/application.js',
    output: {
        filename: 'application.js',
        chunkFilename: '[name].application.js',
        path: path.resolve(__dirname, 'public')
    }
};
