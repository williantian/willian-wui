const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    ...base.entry,
    index: './example.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'WUI', //在html文件中的相应的写作
    //<title><%= htmlWebpackPlugin.options.title %></title>才能生效
    template: 'example.html',
    filename: 'index.html'
  })],
});