var path = require('path');
var webpack = require('webpack');

var WebpackConfig = {
  entry: {
    'build/application/bundle': './src/application', // will be  ./build/application/bundle.js,
  },
  output: {
    path:  __dirname + "/js,
    filename: '[name].js'
  }
}

module.exports = WebpackConfig;
