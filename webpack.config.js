const config = {
  entry: {
    'static/js/main.bundle.js': './markup/static/ts/main.ts', // scripts
  },
  output: {
    path: __dirname + '/build/',
    filename: "[name]"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};

module.exports = config;
