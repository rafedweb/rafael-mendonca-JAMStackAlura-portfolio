import React from 'react'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/GlobalStyle'
import theme from '../theme'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Rafael de Mendonça - Portfolio </title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />     
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet" />
    </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
