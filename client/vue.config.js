module.exports = {
  productionSourceMap: (process.env.NODE_ENV === 'production'),
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Punch Clock'
      return args
    })
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        pathRewrite: {'^/api': '/'},
        changeOrigin: false
      }
    }
  }
}