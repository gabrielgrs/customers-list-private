import '../styles/globals.css'
import { Fragment } from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import nookies from 'nookies'
import { ToastProvider } from 'react-toast-notifications'
import GlobalStyles from '../styles/Globals'
import { lightTheme } from '../styles/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeProvider from '../contexts/Theme'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px minmax(max-content, calc(100vh - 140px)) 70px;
  height: 100vh;
`

function MyApp({
  Component,
  pageProps,
  startWithDarkTheme,
}: AppProps & { startWithDarkTheme: boolean }) {
  return (
    <Fragment>
      <ThemeProvider startWithDarkTheme={startWithDarkTheme}>
        <Head>
          <title>Customers List</title>
          <meta name="description" content="customers-list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-center">
          <GlobalStyles />
          <NextNprogress
            color={lightTheme.colors.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Grid>
            <Navbar />
            <div>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Grid>
        </ToastProvider>
      </ThemeProvider>
    </Fragment>
  )
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  return {
    startWithDarkTheme: nookies.get(ctx, 'darkTheme'),
  }
}

export default MyApp
