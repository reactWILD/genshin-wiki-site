import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import NavDrawer from "../components/NavDrawer"
import { NavDrawerProvider } from "../context/navDrawer"
import customTheme from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title> Genshin App Guide! </title>
      </Head>

      <NavDrawerProvider>
        <NavDrawer />

        <Component {...pageProps} />
      </NavDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
