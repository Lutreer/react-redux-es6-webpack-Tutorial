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
4. webpack的配置文件

    ```
    var path = require('path');

    module.exports = {
        entry: './index.js',//项目的入口文件
        
        //编译文件输出配置
        output: {
            path: path.join(__dirname, '/dist'),//输出路径
            filename: 'bundle.js'//文件名
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
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










