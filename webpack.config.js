/**
 * webpack 的入口文件
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/app.js', './src/index.html'], // 入口
  output: {
    path: resolve(__dirname, 'dist'), // 输出路劲
    filename: './js/index.js' // 输出的文件名
  },
  mode: 'development', // 开发模式
  // 所有的 loader 都要在 module 对象的 rules 属性中，rules 是一个数组，数组中的每一个对象就是一个 loader
  // 下载后无需引入，直接使用
  module: {
    rules: [
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          'style-loader', // 3. 用于在html文档中创建一个style标签, 将样式塞进去
          'css-loader', // 2. 将编译后的css转换成为CommonJS的一个模块
          'less-loader' // 1. 将less编译为css,但不生成单独的css文件，在内存中
        ]
      },
      {
        test: /\.js$/, // 只检测 js 文件
        exclude: /node_modules/, // 排除 node_modules
        enforce: 'pre', // 提前加载使用
        loader: 'eslint-loader' // 语法检查
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // 以当前文件为模版创建新的HTML（结构和原来一样，自动引入打包资源）
    })
  ],
  devServer: {
    open: true, // 自动打开浏览器
    compress: true, // 启动 gzip 压缩
    port: 3000 // 端口号
  },
  devtool: 'cheap-module-eval-source-map'
}
