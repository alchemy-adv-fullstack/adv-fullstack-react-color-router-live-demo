const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    './src/index.js',
  ],
  output: {
    // Necessary for HTML 5 routes along with historyApiFallback.
    publicPath: '/',
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    clean: true,
  },
  devServer: {
    // Necessary for HTML 5 routes along with publicPath.
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // Put CSS in a style tag.
          { loader: 'css-loader' }, // We can now understand CSS.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};