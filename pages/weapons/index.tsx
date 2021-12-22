import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import AppHeader from "../../components/AppHeader"

const WeaponsPage: NextPage = () => {
  return (
    <Box>
      <AppHeader />

      <Box as={"main"}>
        <Text> Lista de armas </Text>
      </Box>
    </Box>
  )
}

export default WeaponsPage
