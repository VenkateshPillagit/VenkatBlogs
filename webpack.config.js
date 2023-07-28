const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  target: 'web',
  devServer: {
    port: 3000,

    static: ['./public'],

    open: true,

    hot: true,

    liveReload: true,

    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(jpg|gif|png|svg)$/i,
      use: ['url-loader', 'file-loader'],
    },
    ],
  },
};
