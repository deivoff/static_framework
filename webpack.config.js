const fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  autoprefixer = require('autoprefixer-stylus');

const pages = fs
  .readdirSync('./markup/pages/')
  .filter(fileName => {
    return fileName.indexOf('_template') < 0;
  })
  .map(fileName => {
    return new HtmlWebpackPlugin({
      filename: fileName.replace('pug', 'html'),
      template: `./markup/pages/${fileName}`,
      inject: false
    });
  });

const config = {
  entry: {
    'static/js/main': './markup/static/ts/main.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: ['./markup', './build'],
      inline: true,
      port: 3000,
      watchContentBase: true,
      hot: true,
    },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.styl(us)?$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [autoprefixer()]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    ...pages,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = config;
