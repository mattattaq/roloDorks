var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loaders: ['css-loader', 'sass-loader'],
    publicPath: '/build'
})
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname + '/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader'
                  }
                ]
              },
            {
                test: /\.sass$/,
                use: cssConfig
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        hot: true,
        // open: true,
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: "main.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()

    ]
}