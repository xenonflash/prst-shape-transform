const path = require('path')
const _rs = p => path.resolve(__dirname, p)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: _rs('example/example.js'),
    mode: "development",
    output: {
        path: _rs('tmp'),
        filename: `example.js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'prst-shape-transform': _rs('src/index.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}