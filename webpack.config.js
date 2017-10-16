var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./src/js/index.js",
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
                test: /\.sass$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("main.css")
    ]
}