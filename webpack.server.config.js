const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, './build/server'),
    filename: 'bundle.js',
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = merge(sharedConfig, config);
