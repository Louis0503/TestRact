const webpack = require('webpack');

const path = require("path");
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  context: __dirname,
  //Files entry point
  entry: {
    app:APP_DIR +'/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案
    //（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。
    //preset 則是使用的 babel 轉譯規則，這邊使用 react、es2016
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  plugins: [HTMLWebpackPluginConfig],
  resolve: { fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  // devServer 則是 webpack-dev-server 設定
  devServer: {
    inline: true,
    port: 8008,
    host: process.env.IP, // "10.0.0.106", "localhost"
  }
};
