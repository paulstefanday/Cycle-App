var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context:  __dirname + '/app',
  entry: { app: './index.js' },
  output: { path:  __dirname + '/dist', filename: 'bundle.js' },
  plugins: [ new webpack.DefinePlugin({ 
    ON_TEST: process.env.NODE_ENV === 'test',
    IS_PROD: process.env.NODE_ENV === 'production' 
  }) ],
  resolve: { modulesDirectories: [ "node_modules", "bower_components", "app"] },

  module: {
    loaders: [
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image?bypassOnDebug&optimizationLevel=7&interlaced=false'] },
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.jade$/, loader: 'jade', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/},
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  }
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push( new webpack.optimize.UglifyJsPlugin({minimize: true}) );
  // new ExtractTextPlugin("styles.css", { allChunks: true }) 
}


module.exports = config;