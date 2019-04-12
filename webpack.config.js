const fs = require("fs");
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = fs.readdirSync('./markup/pages/')
    .filter((fileName) => {
      return fileName.indexOf('_template') < 0
    })
    .map((fileName) => {
      return new HtmlWebpackPlugin({
        filename: fileName.replace('pug', 'html'),
        template: `./markup/pages/${fileName}`,
        inject: false
      })
    })

const config = {
  entry: {
      'static/js/main': './markup/static/js/main.js', // scripts
      'css/main.css': './assets/scss/main.scss' //styles
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader!css-loader!stylus-loader']
      }
    ]
  },
  plugins: [
    ...pages,
  ]
};

module.exports = config;