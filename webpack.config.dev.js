const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example.tsx',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'WUI', //在html文件中的相应的写作
        //<title><%= htmlWebpackPlugin.options.title %></title>才能生效
        template: 'example.html'
    })],
})