const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
    node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      { test: /\.js$/, exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    host: 'localhost',
  }
};