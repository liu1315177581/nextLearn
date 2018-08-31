import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '@/lib/with-redux-store'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import 'babel-polyfill'
class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
                <style global jsx>
                {`
                    @import '../../_next/static/style.css'
                `}
                </style>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)