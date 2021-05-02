const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3001,
    open: true,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
  ],
}
