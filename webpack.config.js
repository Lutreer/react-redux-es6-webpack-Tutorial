var path = require('path');
var webpack = require('webpack');

var CONST = {
    EXCLUDE: ['/node_modules/', '/test/', '/dist/'],
    INCLUDE: ["/app/", "/components/"],
}

module.exports = {
    // entry: [
    //     'webpack-dev-server/app?http://localhost:3000',
    //     'webpack/hot/only-dev-server',
    //     './app/index'
    // ],
    entry: './app/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: ['/node_modules/', '/test/', '/dist/'],
                query: {
                    presets: ['react', 'es2015']
                }
            },

            {
                test: /\.scss$/,
                exclude: CONST.EXCLUDE,
                loader: 'style!css!sass'
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
        //new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin('react', 'react-dom'),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
}