const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/pages', to: 'pages/' },
                { from: 'src/service-worker.js', to: 'service-worker.js' },
                { from: 'src/images', to: 'images/' },
                { from: 'src/manifest.json', to: 'manifest.json' },
            ],
        }),
    ],
};
