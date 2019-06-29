module.exports = {
    runtimeCompiler: true,

    devServer: {
        https: true,
        host: process.env.VUE_APP_SERVER_HOST,
        port: process.env.VUE_APP_SERVER_PORT,
        proxy: {
            '^/api': {
                target: process.env.VUE_APP_API_URL,
                pathRewrite: { '^/api': '' },
                changeOrigin: true
            }
        }
    },


    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    }
}
