module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-object-rest-spread',
      '@babel/plugin-transform-class-properties',
    ],
  };
};
