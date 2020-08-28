const path = require('path')
const _rs = p => path.resolve(__dirname, p)

module.exports = {
  entry: _rs('tmp/index.js'),
  mode: "production",
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
  },
  node: {
    fs: 'empty',
    path: 'empty'
  }
}
