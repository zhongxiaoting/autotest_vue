module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://127.0.0.1:8000', //后端接口地址
                changeOrigin: true,  //是否允许跨越
                pathRewrite: {
                    '^/api': '/api',        //重写,
                }
            }
        },
}}