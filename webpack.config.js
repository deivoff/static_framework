const pathConfig = require('./configs/config-path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: `.${pathConfig.js.entry}`
  },
  output: {
    path: `${__dirname}${pathConfig.js.output}`,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true,
    })],
  },
};
