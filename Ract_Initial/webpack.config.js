var webpack = require('webpack')
var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    app:'./src/entry.js'
  },
  output: {
    path: path.join(__dirname, "build/dist/"),
    filename: 'bundle.js',
    publicPath: "dist/"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ],

  },
  plugins: [
    new webpack.BannerPlugin('This file is created by Louis')
  ],
  resolve: { fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") }
}