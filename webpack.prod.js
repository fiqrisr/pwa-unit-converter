const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin(),
        // new PurgecssPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        // }),
    ],
});
