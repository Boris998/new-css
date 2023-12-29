import '@/styles/globals.css'
import '@/pages/subgrid/subgrid.css'
import '@/pages/layers/layers.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


