import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import AppHeader from "../../components/AppHeader"

const ArtifactsPage: NextPage = () => {
  return (
    <Box>
      <AppHeader />

      <Box as={"main"}>
        <Text> Artefatos </Text>
      </Box>
    </Box>
  )
}

export default ArtifactsPage
