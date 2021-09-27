const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production', // Change from 'development' to 'production' to generate minimized js, ready for distribution
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    // assetModuleFilename: '[name][ext]', // Does the same as generator: {filename: 'imgs/[hash][ext][query]' // Store generated files in 'imgs' folder}
    clean: true
  },
  // loaders
  module: {
    rules: [
      // css loader
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  },
  devtool: false, // Changed from 'inline-source-map' to false to solve memory issues
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })]
  // The server serves files from memory rather than creating local copies
  /*  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5000, // default 8080
    open: true,
    hot: true
    // watchContentBase: true // My VsCode apparentl doesn't recognize this
  } */
})
