const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/src/server'),
  output: {
    path: path.join(__dirname, '/src/static/js'),
    filename: 'main.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: "empty",
    net: "empty"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          "presets": ["es2015", "stage-0"]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      },
    ]
  },
  progress: true,
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js']
  }
};
