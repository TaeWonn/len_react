// webpack.config.js

const HtmlWebPackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;
module.exports = {
    mode : "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash].js"
    },
    devServer: {
        host: 'localhost',
        port: port,
        open: true
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: "public/index.html"
        })
    ]
    ,module: {
        rules: [
            {
                test: /\.(js|jsx)$/,       //빌드할 파일 확장자 정규식
                exclude: "/node_modules/",    //제외할 파일 정규식
                use: {
                    loader: "babel-loader" //사용할 로더 이름
                    //,option: ""  // 로더 옵션
                }
            }, {
                test: /\.html$/,
                use : [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }
}