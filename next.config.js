/*module.exports = {
    exportPathMap: () => {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    },
    distDir: 'build',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        return config
    },
}*/



const withLess = require('@zeit/next-less')
module.exports = withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // distDir: 'build',
    webpack(config, options) {
        return config
    },
    exportPathMap() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    },
})