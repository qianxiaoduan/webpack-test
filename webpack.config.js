const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    module: {
        rules: [
            //将相互依赖的模块打包到一个文件
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        //dist中创建index.html文件并自动引用相关的 assets 文件(如 css, js)
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
module.exports = config;
