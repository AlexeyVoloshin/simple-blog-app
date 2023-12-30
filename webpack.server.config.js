const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');

let config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.join(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [],
  },
};

module.exports = merge(sharedConfig, config);
