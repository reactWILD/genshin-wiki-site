import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, NextScript, Main } from 'next/document'
import customTheme from '../styles/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&display=swap" 
            rel="stylesheet" 
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto:ital,wght@0,400;0,700;1,700&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <NextScript />
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument