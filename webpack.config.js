var path    = require('path');
var webpack = require('webpack');


module.exports = {

  entry: {
    main: './assets/react/index.js',
  },

  output: {
    filename: './public/js/[name].js'
  },

  plugins: [
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: JSON.stringify('production')
    //     }
    // }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
  ],

  debug: false,

  module: {

    loaders: [
      {
        // Only run `.js` files through Babel
        test: /\.js?$/,
        loaders: ['babel-loader']
      }
    ]
  }
};
