const fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer-stylus');
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');


const utils = {
  /**
   * Формирование конфигураций страниц для
   * их дальнейшей сборки
   */
  pages: fs.readdirSync('./markup/pages/')
    .filter((fileName) => fileName.indexOf('_template') < 0)
    .map((fileName) => {
      return new HtmlWebpackPlugin({
        filename: fileName.replace('pug', 'html'),
        template: `./markup/pages/${fileName}`,
        inject: false
      })
    }),
  /**
   * Формирование путей для копирования ресурсов,
   * расположенных в компонентах
   */
  componentsAssets: fs.readdirSync('./markup/components/')
    .filter((componentName) => fs.existsSync(`./markup/components/${componentName}/assets/`))
    .map((componentName) => ({
      from: `./markup/components/${componentName}/assets/`,
      to: `./static/img/assets/${componentName}/`,
    })),
}

const config = {
  entry: {
    'static/js/main.bundle.js': './markup/static/ts/main.ts', // scripts
    'static/css/main.bundle': './markup/static/stylus/main.styl' //styles
  },
  output: {
      path: __dirname + '/build/',
      filename: "[name]"
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: ['./markup', './build'],
      inline: true,
      port: 3000,
      watchContentBase: true,
      hot: true,
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
        test: /\.(ico|svg|png|jpg|gif|mp4|mov|pdf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/assets/',
        },
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
    ...utils.pages,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = config;
