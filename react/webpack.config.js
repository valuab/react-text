//导入配置模块
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin') //导入 在内存中自动生成index.html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件


//创建一个插件的实例对象
// const htmlPlugin = new HtmlWebpackPlugin({
//     // title:'YJ',
//     // hash: true,
//     // template: path.join(__dirname,'./src/index.html'),//源文件
//     // filename:'index.html',
//     // inject:true
//     // template: './src/index.html',//源文件
//     // filename: path.join(__dirname,'./index.html'),//生成目标文件的名称//生成内存中首页的名称
//     filename: path.resolve(__dirname,'./index.html'),//生成目标文件的名称//生成内存中首页的名称
//     template: './src/index.html',
//     // filename:'test.html'
// })
// console.log(htmlPlugin)


//新建配置对象//向外暴露一个导报对象//node语法 因为webpack是基于node构建的 所以webpack支持所有nodeAPI
module.exports = {
    mode : "production", //development//开发模式 //production//生产模式
    //在webpack4.x中，约定大于配置，不需要配置入口文件 约定是 默认 入口文件是 src => index.js
    module:{
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    entry: './src/index.js',//入口
    output: {
        filename: '[name].js',
        // publicPath:'./'
        // path:'./',
        path: path.resolve(__dirname, './dist/'),
    },//出口
    plugins:[
        new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname,'./index.html'),
            template: './src/index.html'
        })
    ]
}

//目前不行
// exports default {}