const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = 8080;

const config = {
  target: 'web',

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './build/client'), // [B]
    filename: 'scripts/bundle.js', // [B]
    publicPath: `http://localhost:${clientPort}/`, // [C]
  },

  devServer: {
    port: clientPort, // [C]
    liveReload: true,
  },

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

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/bundle.css',
    }),
  ],
};

module.exports = merge(sharedConfig, config);
