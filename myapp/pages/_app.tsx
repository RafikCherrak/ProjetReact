import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Route } from 'react-router-dom'
import Home from '.'
import Page2 from './inscription_ok'

export default function App({ Component, pageProps }: AppProps) {

  <><Route path="/" children={<Home />} />
    <Route path="/inscription_ok" children={<Page2 />} /></>

  return <Component {...pageProps} />
}