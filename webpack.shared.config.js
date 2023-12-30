// const path = require('path');
// const { merge } = require('webpack-merge');

// const clientConfig = {
//   target: 'web',
//   entry: './src/index.jsx',
//   output: {
//     filename: 'client.bundle.js',
//     path: path.resolve(__dirname, 'build'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// };

// const serverConfig = {
//   target: 'node',
//   entry: './server/index.js',
//   output: {
//     filename: 'server.bundle.js',
//     path: path.resolve(__dirname, 'build'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// };

// module.exports = merge(clientConfig, serverConfig);
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
