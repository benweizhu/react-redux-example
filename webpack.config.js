const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: ['./app/index.jsx'],
    vendor: ['react', 'react-dom', 'react-redux', 'babel-polyfill']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract(['css-loader?minimize&modules&importLoaders=2&localIdentName=[name]__[local]', 'postcss-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    hot: true
  },
  devtool: 'cheap-module-inline-source-map'
};
