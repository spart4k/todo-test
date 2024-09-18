const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";',
      },
    },
    sourceMap: process.env.NODE_ENV === 'development',
  },
  configureWebpack: {
    entry: './src/main.js',
    devServer: {
      hot: true,
    },
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
  },
  transpileDependencies: true,
})
