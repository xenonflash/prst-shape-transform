const path = require('path')
const _rs = p => path.resolve(__dirname, p)


module.exports = {
  entry: _rs('src/index.js'),
  target: "node",
  mode: "development",
  output: {
    path: _rs('dist'),
    filename: `index.js`,
    library: 'prst-shape-transform',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
}
