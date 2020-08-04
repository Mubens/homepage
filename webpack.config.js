const { resolve } = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/bundles.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      }
    ]
  },
  mode: 'development'
}
