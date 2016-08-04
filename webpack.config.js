var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

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
        filename: './app/bundle-[chunkhash:8].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },

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
                    limit: 4096
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin('vendors', './app/vendor-[hash:8].js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: false,
            comments: false,
            compress: {
                warnings: false
            },
        }),

        new HtmlWebpackPlugin({
            template: './app/index.html'
        })

    ],
    eslint: {
        configFile: '.eslintrc',
        quiet: true,
        failOnWarning: false
    }
}
