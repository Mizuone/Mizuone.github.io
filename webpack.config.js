const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "main.[contenthash].js",
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
                    "style-loader",
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
            inject: "body",
            filename: "../index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/godotanimationtracks.html", 
            inject: "body",
            filename: "../src/pages/build/godotanimationtracks.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/godotrpggame.html", 
            inject: "body",
            filename: "../src/pages/build/godotrpggame.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/projectorganizer.html", 
            inject: "body",
            filename: "../src/pages/build/projectorganizer.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/articles/swrwithreacthooks.html", 
            inject: "body",
            filename: "../src/pages/build/swrwithreacthooks.html"
        })
    ],
    watch: true
};