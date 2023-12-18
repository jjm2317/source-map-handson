const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
 devtool: 'source-map',
//  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  // optimization: {
  //   mangleExports: true,
  //   minimize: true, 
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  

};