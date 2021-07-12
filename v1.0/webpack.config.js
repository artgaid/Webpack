const { dir } = require('console');
const { resolve, dirname } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: resolve(__dirname, 'index.html') })
    ]


}