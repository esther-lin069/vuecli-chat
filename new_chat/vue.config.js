module.exports = {
    assetsDir: 'chat_assets/',
    // publicPath: '/chat/',
    devServer: {
      proxy: {
        '/api':{
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: {'^/api': ''}
        },
        '/ws':{
          target: 'http://localhost:8080',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }