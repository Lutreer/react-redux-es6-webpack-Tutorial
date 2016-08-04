# react

 本项目使用react`(react + react-dom)`,ES6,redux,webpack。从一个文件夹开始！  
前期准备：安装node,npm

## 搭建项目
---

### 项目依赖
1. `npm init` => 当前项目会生成 package.json 文件
2. 全局安装`webpack`：`npm install webpack -g`
3. 全局安装`react` & `react-dom` : `npm install react -g` & `npm install ract-dom -g`
    
    值得注意的是，从react的0.14开始从react中分离出来一个react-dom,只需知道就可以了，
    毕竟react一直在前进，老的API了解即可，这样就为web版的react和移动端的React Native
    共享组件铺平了道路。也就是说我们可以跨平台使用相同的react组件，这是很值得期待的！

3. 安装`babel`：`npm install babel-loader babel-preset-es2015 babel-preset-react --save-dev`

    因为会使用 JSX & ES6 ,就必须为它们的编译做些准备，这里我们使用*babel*，
    *babel*可以将我们的ES6 & JSX 编译成浏览器可以识别的ES5。
    *(NOTE: bable-loader依赖babel依赖于babel-core，所以如果安装过程中提示需要安装这个，你就必须手动安装：`npm install babel-core --save-dev`)*  

    需要的loader还很多,就不再一一说明，一切都在注释里了
```
/*package.json*/

    "dependencies": {
        "webpack": "^1.13.1"
    },
    "devDependencies": {
        "react": "^15.3.0",
        "react-dom": "^15.3.0",
        "babel-core": "^6.11.4",
        "babel-loader": "^6.2.4",
        "babel-preset-es2015": "^6.9.0",/*ES6 -> ES5*/
        "babel-preset-react": "^6.11.1",/*JSX -> ES5*/

        /*react hot module reload react组件热加载，需要配合webpack-server-dev使用（详细看下面的“使用webpack启动项目”）
        install的时候还会给我们安装几个依赖：babel-preset-react-hmre，react-transform-hmr，react-transform-catch-errors，redbox-react*/
        "babel-preset-react-hmre": "^1.1.1",

        "clean-webpack-plugin": "^0.1.10",/*用来删除文件*/
        "css-loader": "^0.23.1",/*与style-loader和sass-loader一起使用处理css或sass*/
        "style-loader": "^0.13.1",
        "sass-loader": "^4.0.0",
        "node-sass": "^3.8.0",/*sass-loader依赖node-sass*/
        "eslint": "^3.2.0",/*代码风格检测工具,辅助编码规范，控制代码质量，可以检测ES6和JSX*/
        "eslint-loader": "^1.5.0",
        "file-loader": "^0.9.0",/*与url-loader配合使用，项目中用处处理图片资源*/
        "url-loader": "^0.5.7",/**/
        "html-webpack-plugin": "^2.22.0",/*项目中用于将编译好的js文件路径自动在html中引入*/
        "webpack-dev-server": "^1.14.1"/*是一个静态资源Web服务器*/
    }

```

### 配置文件

配置文件才是重头戏，如果说项目是一个产品，语言是工具，但配置文件就是磨刀的利器啊，
工欲善其事必先利其器！配置文件写的好，代码敲起来会有飞的感觉。
先说说我们想要什么效果： 
- ES6和JSX转换成浏览器可以识别ES5
- 从一个JS入口文件开始所有的依赖打包在一个JS文件中，公共库提取出来方便做缓存。
- Sass文件自动编译，一并打包进JS文件
- 图片可根据大小转换data url的形式使用（Base64）
- 可以自动启动一个本地服务
- 实现修改代码自动在浏览器中更新，但不刷新页面（热加载）

这些都是最基本的的，下面我我们看一下配置吧：

开始之前还是先补充一点`node`的知识，毕竟配置文件时node写的

> `var path = require('path');`

[ **`path`** ](https://nodejs.org/docs/latest-v5.x/api/path.html)
是node的一个模块,在官网有详细的文档。我们这里用到的是 `path.join()` ,
可接受一个或多个参数，返回将这些字符串参数结合而成的路径字符串。

> __dirname

    用于获取当前模块所在**目录**的完整**绝对路径**。  
    还有一个`__filename`，可获取当前模块**文件**的带有完整绝对路径的**文件名**。

```
//webpack.config.js

var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var CONST = {
    EXCLUDE: ['/node_modules/', '/test/', '/dist/'],
    INCLUDE: ["/app/", "/components/"],
}

module.exports = {

    //入口,下面其实是多入口文件的写法，单一入口文件这样既可：entry：'app/index.js'
    //这里的bundle是我们的打包入口
    //vendors是后面new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor-[hash:8].js')用于将公共库单独打包的
    entry: {
        bundle: path.resolve(__dirname, 'app/index.js'),//入口文件,输出配置是下面的output
        vendors: ['react', 'react-dom']//
    },

    output: {
        path: path.join(__dirname, '/dist'),//输出的文件路径
        filename: 'bundle-[chunkhash:8].js'//文件名，chunkhash是根据文件内容计算的hash值
    },

    resolve: {
        //文件后缀扩展，这样我们直接import hello from 'modules/hello'不用写hello.js
        extensions: ['', '.js', '.jsx', 'scss']
    },

    //这里是本地启动服务的配置，也可以在启动命令里添加
    //webpack-dev-server --process --colors --hot --inline
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3005
    },

    module: {
        loaders: [{
                test: /\.js | jsx$/,
                loader: 'babel',//等价于loader:'babel-loader',loader是可以省略的
                exclude: CONST.EXCLUDE,//不便利这些文件
            },

            {
                test: /\.scss$/,
                exclude: CONST.EXCLUDE,
                //!代表分隔符，另一种写法loaders:[style,css,sass]
                //等价于loader:'style-loader!css-loader!sass-loader'
                loader: 'style!css!sass'
            },

            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 4096
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//每次编译前先清空文件
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor-[hash:8].js'),//我不知道为什么这里不能使用chunkhash
        new webpack.HotModuleReplacementPlugin(),//热加载
        new webpack.NoErrorsPlugin(),//编译出错不终止
        new webpack.optimize.UglifyJsPlugin({
            minimize: false,//js压缩
            comments: false,//删除注释
            compress: {
                warnings: false//压缩是不输出警告
            },
        }),

        //帮我们生成HTML文件，这里我们还是使用自己写的，但是并没有引入任何css和js
        //HtmlWebpackPlugin会把上面output生成的文件自动写入该文件
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })

    ],
    //代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量
    eslint: {
        configFile: '.eslintrc',
        quiet: true,
        failOnWarning: false
    }
}

```

## 使用webpack启动项目
---

### 本地开发

`npm run dev`

webpack 开发环境下编译
webpack -p 产品编译及压缩
webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
webpack -d 引入 source maps


1. webpack-dev-server：，是一个静态资源Web服务器，可以直接在浏览器里以这样的方式访问：http://localhost:8080

2. babel-plugin-react-transform：代替react-hot-loader的插件，是基于Babel Plugin的。这是一个基本的架子，要实现热替换还要安装其他插件。

3. react-transform-hmr：安装这个才能实现热替换的功能。

4. babel-preset-react-hmre：让Babel知道HMR（热替换），涉及到了webpack.config.js里loader为babel（也就是js、jsx使用babel-loader地方）的配置。

5. react-transform-catch-errors、redbox-react：这两个插件把catch到的错误直接显示到页面上，就不用再打开控制台看了。不过这两个是为了看到错误方便而安装的，实际可以不安

    *`npm install babel-preset-react-hmre --save-dev` 会把其它的都install*










