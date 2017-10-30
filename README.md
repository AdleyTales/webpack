# webpack2
> 最优秀的模块化开发打包工具,不仅仅如此！

> webpack的世界里，一切皆是模块！

## 第一部分
### 安装：

      cnpm install webpack@2.6.1 --save-dev

### 入门：打包js文件
test1 文件夹下,将a.js b.js 合并到entry.js,打包到build/bundle.js中

webpack的配置文件：

```js
  module.exports = {
    entry:__dirname + '/test1/entry.js',
    output:{
      path:__dirname + '/build',
      filename:'bundle.js'
    }
  }
```
命令行执行webpack

## 第二部分
#### loader：
loader是为了转换、编译文件。比如es2015~2017不能被浏览器所识别，loader可以将js最新的语法，编译转换成es5语法；sass、less、stylus等css预编译转换成css文件等等...

下面test2文件夹：利用webpack编译es2015语法，配置webpack.config.js：

1、第一步安装loader：

    cnpm install babel-loader babel-core babel-preset-es2015 --save-dev

2、第二步配置webpack配置文件：

```js
    module.exports = {
      entry:__dirname + '/test2/es2015.js',
      output:{
       path:__dirname + '/build2',
       filename:'bundle2015.js'
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
      }
    }
```    
## 第三部分
#### 插件plugins：
loader仅仅是作用在每个文件的基础上进行转换、编译。而plugins功能更加强大和灵活,作用于整个构建生命过程。需要new创建一个实例来进行使用。

```js
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

```
