const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'pro'
const app = next({ dev })
const handle = app.getRequestHandler()
const getConfig =  require('next/config')

const api = getConfig.default().publicRuntimeConfig.api;
const devProxy = {
    '/v2': {
        target: api,
        /*pathRewrite: {
            '^/api': '/'
        },*/
        changeOrigin: true
    }
}


app.prepare()
    .then(() => {
        const server = express()

        // Set up the proxy.
        if (dev && devProxy) {
            const proxyMiddleware = require('http-proxy-middleware')
            Object.keys(devProxy).forEach(function(context) {
                server.use(proxyMiddleware(context, devProxy[context]))
            })
        }

        /* 遮盖路由 */
        /*server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = {
                title: req.params.id,
                id: req.params.id
            }
            app.render(req, res, actualPage, queryParams)
        })*/

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })