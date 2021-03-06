const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/subscroller/',
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/views/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/public' }
        ])
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.jsx']
    }
};

