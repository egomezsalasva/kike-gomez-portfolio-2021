import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import { brandingColors } from '../styles/customStyles'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${brandingColors.light};
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
