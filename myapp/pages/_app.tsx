import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Route } from 'react-router-dom'
import Home from '.'
import Page2 from './page2'

export default function App({ Component, pageProps }: AppProps) {

  <><Route path="/" children={<Home />} />
    <Route path="/page2" children={<Page2 />} /></>

  return <Component {...pageProps} />
}