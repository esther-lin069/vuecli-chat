module.exports = {
    assetsDir: 'assets/',
    // publicPath: '/chat/',
    devServer: {
      proxy: {
        '/api':{
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: {'^/api': ''}
        },

      }
    }
  }