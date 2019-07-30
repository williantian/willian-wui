const path = require('path');
module.exports = {
    //mode: 'development', //值是development或production 正在开发或者进行发布
    entry: {
        index: './lib/index.tsx' //为安全起见从./开始写 后面接路径
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        //后缀是这些的文件 都会去找
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib')
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
    },
    //plugins: [new HtmlWebpackPlugin({
    //    title: 'WUI', //在html文件中的相应的写作
    //   //<title><%= htmlWebpackPlugin.options.title %></title>才能生效
    //    template: 'index.html'
    //})],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'//loader需要安装
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    //externals: { //externals 内的库是属于外部的库
    //    react: {
    //        commonjs: 'react', //module.exports={} 引用var React=require('react')括号内可配置
    //       commonjs2: 'react',  //nodejs标准  modules.export
    //        amd: 'react',       //浏览器标准
    //        root: 'React', // 两者都不是 <script src="xx/react.js"></script>
    //       //window.react = {} window.xxx可以配置
    //   },
    //    'react-dom': {
    //       commonjs: 'react-dom',
    //       commonjs2: 'react-dom',
    //       amd: 'react-dom',
    //       root: 'ReactDOM',
    //   },
    // }
}