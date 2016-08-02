var path = require('path');
var webpack = require('webpack');

var CONST = {
    EXCLUDE: ['/node_modules/', '/test/', '/dist/'],
    INCLUDE: ["/app/", "/components/"],
}

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'app/index.js'),
        vendors: ['react', 'react-dom']
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle-[chunkhash:8].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },

    // devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    module: {
        loaders: [{
                test: /\.js| jsx$/,
                loader: 'babel',
                exclude: CONST.EXCLUDE,
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor-[chunkhash:8].js')
        //webpack-dev-server --hot --inline        
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: {
        //         warnings: false
        //     },
        // }),

    ],
}