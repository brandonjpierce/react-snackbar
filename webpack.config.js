var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    Snackbar: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: ['Smelly', '[name]'],
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!autoprefixer-loader')
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('smelly.snackbar.css')
  ],
  externals: {
    'react': 'React'
  }
};
