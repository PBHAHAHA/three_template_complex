const path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../static')}
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },{
        test: /\.(jpg|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]'
        }
      },{
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'assets/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]'
        }
      }
    ]
  }
}