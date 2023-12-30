const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = 8080;

const config = {
  target: 'web',

  entry: './src/index.js',
  output: {
    filename: 'client.bundle.js', // [B]
    path: path.resolve(__dirname, 'build'), // [B]
    publicPath: `http://localhost:${clientPort}/`, // [C]
  },

  devServer: {
    port: clientPort, // [C]
    liveReload: true,
  },

  module: {
    rules: [],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/bundle.css',
    }),
  ],
};

module.exports = merge(sharedConfig, config);
