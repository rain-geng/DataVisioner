'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://api.v11nlab.com/'
      }
    }
  },
  publicPath: '/',
  outputDir: 'docs',
  productionSourceMap: false,
  configureWebpack: config => {
    config.externals = {
      vue: 'Vue',
      DataVisioner: 'DataVisioner'
    }
  },
  chainWebpack(config) {
    
    config.module
      .rule('js')
      .include
      .add(resolve('src'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(option => {
        return option
      })
    
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    //config
    //  .optimization.splitChunks({
    //    chunks: 'all',
    //    cacheGroups: {
    //      libs: {
    //        name: 'chunk-libs',
    //        test: /[\\/]node_modules[\\/]/,
    //        priority: 10,
    //        chunks: 'initial' // only package third parties that are initially dependent
    //      },
    //      elementUI: {
    //        name: 'chunk-elementUI', // split elementUI into a single package
    //        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //        test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
    //      },
    //      ECharts: {
    //        name: 'chunk-ECharts',
    //        priority: 20,
    //        test: /[\\/]node_modules[\\/]_?echarts(.*)/ // in order to adapt to cnpm
    //      }
    //    }
    //  })

    // config.optimization.runtimeChunk('single')
  }
}
