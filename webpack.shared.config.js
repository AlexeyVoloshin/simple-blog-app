module.exports = {
  mode:
    process.env.NODE_ENV === 'production' // [A]
      ? 'production'
      : 'development',

  module: {
    rules: [
      {
        // [B]
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.less', '.css'], // [C]
  },
};
