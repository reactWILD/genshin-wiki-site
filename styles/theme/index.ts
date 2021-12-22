import { extendTheme } from "@chakra-ui/react"
import { breakpoints } from './breakpoints'
import { config } from './config'
import { fonts } from './fonts'

const customTheme = extendTheme({
	breakpoints,
	config,
	fonts
})

export default customTheme