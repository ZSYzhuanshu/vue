const path = require('path')
let entry = { entry: './src/main.js' }
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    pages: {
        index: entry,
    },
    outputDir: 'dist',
    devServer: {
      // overlay: {
      //   warnings: false, //不显示警告
      //   errors: false	//不显示错误
      // },
    },
    // lintOnSave: true, //关闭eslint检查
    chainWebpack: config => {
      config.plugin('webpack-bundle-analyzer')
        .use(BundleAnalyzerPlugin)
    }
}  