var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/app?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/index'
    ],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                include: [
                    path.join(__dirname, "app"),
                    path.join(__dirname, "components")
                ],
                loaders: ['react-hot', 'babel', 'babel-loader']


            },
        
            {
                test: /\.css$/,
                exclude: ['/node_modules/','/test/','/dist/'],
                loader: "style!css"
            },
            {
                test: /\.scss/,
                exclude: ['/node_modules/','/test/','/dist/'],
                loader: 'style-loader!css-loader!scss-loader'
            }
        ]
    }
}