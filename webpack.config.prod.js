const base = require('./webpack.config');
module.exports = Object.assign({}, base, {
    mode: 'production',
    externals: { //externals 内的库是属于外部的库
        react: {
            commonjs: 'react', //module.exports={} 引用var React=require('react')括号内可配置
            commonjs2: 'react',  //nodejs标准  modules.export
            amd: 'react',       //浏览器标准
            root: 'React', // 两者都不是 <script src="xx/react.js"></script>
            //window.react = {} window.xxx可以配置
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
});