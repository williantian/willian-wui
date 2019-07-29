const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development', //值是development或production 正在开发或者进行发布
   entry: {
       index: './lib/index.tsx' //为安全起见从./开始写 后面接路径
   },
   output: {
       path: path.resolve(__dirname, 'dist/lib')
       // 所有输出文件的目标路径
       // 必须是绝对路径（使用 Node.js 的 path 模块）
   },
   plugins: [new HtmlWebpackPlugin({
       title: 'WUI', //在html文件中的相应的写作
       //<title><%= htmlWebpackPlugin.options.title %></title>才能生效
       template: 'index.html'
   })],
   module: {
       rules:[
           {
               test: /\.tsx?$/,
               loader: 'awesome-typescript-loader'//loader需要安装
           }
       ]
   }
}