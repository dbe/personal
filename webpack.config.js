var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var demos = fs.readdirSync('./app-js/p5');
var entry = {}
demos.forEach(function(demo) {
  entry[demo] = './app-js/p5/' + demo + '/app.js';
})

var WebpackConfig = {
  entry: entry,
  output: {
    path:  __dirname + '/app/assets/javascripts/p5',
    filename: '[name]/app.js'
  }
}

module.exports = WebpackConfig;
