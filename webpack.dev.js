const path = require('path')
const common = require('./webpack.common')
// Video tutorial uses const merge = require('webpack-merge') which doesn't work
const {merge} = require('webpack-merge')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development', // Change from 'development' to 'production' to generate minimized js, ready for distribution
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // assetModuleFilename: '[name][ext]', // Does the same as generator: {filename: 'imgs/[hash][ext][query]' // Store generated files in 'imgs' folder}
    clean: true
  },
  devtool: false, // Changes from 'inline-source-map' to false to solve memory issues
  // The server serves files from memory rather than creating local copies
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5000, // default 8080
    open: true,
    hot: true
    // watchContentBase: true // My VsCode apparentl doesn't recognize this
  }
})
