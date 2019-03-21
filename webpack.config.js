const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'header.js',
    chunkFilename: '[name].header.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    }
  }
};
