const withLess = require('@zeit/next-less');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { ANALYZE } = process.env

module.exports = withLess({
    /* less模块 */
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // distDir: 'build',
    /* 静态id */
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return 'my-build-id'
    },
    /* webpack扩展 */
    webpack(config, { isServer }) {
        if (ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: isServer ? 8888 : 8889,
                openAnalyzer: true
            }))
        }
        return config
    },
    /* 静态界面路由配置 */
    exportPathMap() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    },
    /* 客户端和服务端配置字段 */
    publicRuntimeConfig: { // Will be available on both server and client
        api: 'https://api.douban.com/'
    }
})