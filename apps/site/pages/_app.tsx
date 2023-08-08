import { AppProps } from 'next/app'
import Head from 'next/head'

function CustomApp({ Component, pageProps, ...rest }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to site!</title>
            </Head>
            <Component {...pageProps} />

        </>
    )
}

export default CustomApp
