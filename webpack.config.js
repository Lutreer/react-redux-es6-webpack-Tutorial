var path = require('path');
var webpack = require('webpack');

var CONST = {
    EXCLUDE: ['/node_modules/', '/test/', '/dist/'],
    INCLUDE: ["/app/", "/components/"],
}
var exclude = []

module.exports = {
    // entry: [
    //     'webpack-dev-server/app?http://localhost:3000',
    //     'webpack/hot/only-dev-server',
    //     './app/index'
    // ],
    entry: {
        index: './app/index'
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.[hash].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },

    module: {
        loaders: [
            {
                test: /\.js[x]$/,
                include: CONST.INCLUDE,
                loader: ['react-hot', 'babel'],
                cacheDirectory:true,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                },
            },

            {
                test: /\.scss$/,
                exclude: CONST.EXCLUDE,
                loader: '!style!css!sass'
            },

            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 8192
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
        new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
    ],
}