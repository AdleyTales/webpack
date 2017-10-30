const webpack = require('webpack');

// test1
// module.exports = {
//   entry:__dirname + '/test1/entry.js',
//   output:{
//     path:__dirname + '/build',
//     filename:'bundle.js'
//   }
// }


//test2
// module.exports = {
//   entry:__dirname + '/test2/es2015.js',
//   output:{
//    path:__dirname + '/build2',
//    filename:'bundle2015.js'
//   },
//   module: {
//    rules: [
//       {
//          test: /\.js$/,
//          exclude: /(node_modules|bower_components)/,
//          use: {
//            loader: 'babel-loader',
//            options: {
//              presets: ['es2015']
//            }
//          }
//       }
//    ]
//   }
// }


//test3
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:__dirname + '/test3/main.js',
  output:{
   path:__dirname + '/build3',
   filename:'build3.js'
  },
  module: {
   rules: [
      {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['es2015']
           }
         }
      }
   ]
 },
 plugins:[
     new webpack.optimize.UglifyJsPlugin(),
     new HtmlWebpackPlugin({
        template: __dirname + "/test3/index.tpl.html"//new 一个这个插件的实例，并传入相关的参数
     })
 ]
}
