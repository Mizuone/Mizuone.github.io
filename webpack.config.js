const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/webfonts/'
                        }
                    }]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
            inject: "head",
            filename: "../index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/godotanimationtracks.html", 
            inject: "head",
            filename: "../src/pages/build/godotanimationtracks.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/godotrpggame.html", 
            inject: "head",
            filename: "../src/pages/build/godotrpggame.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/projectorganizer.html", 
            inject: "head",
            filename: "../src/pages/build/projectorganizer.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/swrwithreacthooks.html", 
            inject: "head",
            filename: "../src/pages/build/swrwithreacthooks.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    watch: true
};