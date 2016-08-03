# react
 本项目使用react`(react + react-dom)`,ES6,redux,webpack。从一个文件夹开始！  
前期准备：安装node,npm

## 搭建项目
1. `npm init` => 当前项目会生成 package.json 文件
2. 全局安装`webpack`：`npm install webpack -g`
3. 全局安装`react` & `react-dom` : `npm install react -g` & `npm install ract-dom -g`
    
    值得注意的是，从react的0.14开始从react中分离出来一个react-dom,只需知道就可以了，
    毕竟react一直在前进，老的API了解即可，这样就为web版的react和移动端的React Native
    共享组件铺平了道路。也就是说我们可以跨平台使用相同的react组件，这是很值得期待的！

3. 安装`babel`：`npm install babel-loader --save-dev`

    因为会使用 JSX & ES6 ,就必须为它们的编译做些准备，这里我们使用*babel*，
    *babel*可以将我们的ES6 & JSX 编译成浏览器可以识别的语句。
4. webpack的配置文件 webpack.config.js. webpack 默认会使用当前目录下的webpack.config.js,
    当然你也可以通过 `--config webpack.config.dev.js` 来指定使用某个文件。

    ```
    var path = require('path');

    module.exports = {
        entry: './index.js',//项目的入口文件
        
        //编译文件输出配置
        output: {
            path: path.join(__dirname, '/dist'),//输出路径
            filename: 'bundle.js'//文件名
        },

        //设置文件后缀名，默认： ["", ".webpack.js", ".web.js", ".js"],
        //如果我们的项目里包含sass,jsx，可以添加 .coffee & .jsx,这样在引用这些文件时就不用写后缀了
        //不过我觉得还是写上会更好
        resolve: {
            //extensions: ['', '.js', '.jsx']
        },

        module: {
            loaders: [
                { test: /\.js|jsx$/, loaders: ['babel'] }
            ]
        }
    }

    ```

    **这里补充一点`node.js`的知识**

    > `var path = require('path');`

   [ **`path`** ](https://nodejs.org/docs/latest-v5.x/api/path.html)
   是node的一个模块,在官网有详细的文档。我们这里用到的是 `path.join()` ,
   可接受一个或多个参数，返回将这些字符串参数结合而成的路径字符串。

    > __dirname

    用于获取当前模块所在**目录**的完整**绝对路径**。  
    还有一个`__filename`，可获取当前模块**文件**的带有完整绝对路径的**文件名**。

## 如何使用webpack

webpack 开发环境下编译
webpack -p 产品编译及压缩
webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
webpack -d 引入 source maps


1. webpack-dev-server：这是Webpack提供的一个基于Express的开发服务器，是一个静态资源Web服务器，可以直接在浏览器里以这样的方式访问：http://localhost:8080

2. babel-plugin-react-transform：代替react-hot-loader的插件，是基于Babel Plugin的。这是一个基本的架子，要实现热替换还要安装其他插件。

3. react-transform-hmr：安装这个才能实现热替换的功能。

4. babel-preset-react-hmre：让Babel知道HMR（热替换），涉及到了webpack.config.js里loader为babel（也就是js、jsx使用babel-loader地方）的配置。

5. react-transform-catch-errors、redbox-react：这两个插件把catch到的错误直接显示到页面上，就不用再打开控制台看了 。不过这两个是为了看到错误方便而安装的，实际可以不安

`npm install babel-preset-react-hmre --save-dev` 会把其它的都install










