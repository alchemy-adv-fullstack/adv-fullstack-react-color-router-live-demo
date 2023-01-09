module.exports = {
  presets: [
    '@babel/preset-env',
    // 'automatic' allows Jest to use JSX. We might be able to remove our
    // ProvidePlugin usage as well...
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};