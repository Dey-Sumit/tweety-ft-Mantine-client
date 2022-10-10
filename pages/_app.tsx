import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'
import LayoutWrapper from '@components/LayoutWrapper'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT // the prefix of the URL only for the client side
axios.defaults.withCredentials = true
console.log('axios.defaults.baseURL', axios.defaults.baseURL)

const queryClient = new QueryClient()

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={
            {
              /** Put your mantine theme override here */
              // colorScheme: 'light',
            }
          }
        >
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
          <Toaster position="bottom-center" />
          <ReactQueryDevtools position="top-left" />
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
