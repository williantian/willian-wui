module.exports = {
   entry: {
       index: './lib/index.tsx' //为安全起见从./开始写 后面接路径
   },
   modules: {
       rules:[
           {
               text: /\.tsx?$/,
               loader: 'awesome-typescript-loader'//loader需要安装
           }
       ]
   }
}