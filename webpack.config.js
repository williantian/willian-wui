const path = require('path');
module.exports = {
   mode: 'production', //值是development或production 正在开发或者进行发布
   entry: {
       index: './lib/index.tsx' //为安全起见从./开始写 后面接路径
   },
   output: {
       path: path.resolve(__dirname, 'dist/lib')
       // 所有输出文件的目标路径
       // 必须是绝对路径（使用 Node.js 的 path 模块）
   },
   module: {
       rules:[
           {
               test: /\.tsx?$/,
               loader: 'awesome-typescript-loader'//loader需要安装
           }
       ]
   }
}