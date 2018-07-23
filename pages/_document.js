import Document, { Head, Main, NextScript } from 'next/document'



export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel = "icon" href='/static/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}