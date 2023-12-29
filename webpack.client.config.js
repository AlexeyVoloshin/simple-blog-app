const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = 8080;

const config = {
  target: 'web',

  entry: './src/index.js', // [A]

  output: {
    path: path.join(__dirname, './build/client'), // [B]
    filename: 'scripts/bundle.js',
    publicPath: `http://localhost:${clientPort}/`,
  },

  devServer: {
    port: clientPort,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.less$/,
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
          'less-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles/bundle.css',
    // }),
    new MiniCssExtractPlugin({
      filename: 'build/styles.css',
    }),

    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: false,
    }),
  ],
};

module.exports = merge(sharedConfig, config);
