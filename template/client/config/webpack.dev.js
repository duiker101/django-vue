const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    entry: [
        'webpack-dev-server/client?http://localhost:8001',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: 'http://localhost:8001/static',
        filename: '[name]-[hash].js',
    }
    , devServer: {inline: true}
    , devtool: '#source-map'
})

