import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { useNavDrawerContext } from "../../context/navDrawer"

export default function AppHeader() {
  const { openDrawer } = useNavDrawerContext()

  return (
    <Flex justify={"center"} align={"center"} as={"header"} h={"45px"}>
      <Box pos={"absolute"} left={"10px"}>
        <IconButton
          aria-label="Open Menu"
          variant="unstyled"
          icon={<HamburgerIcon w={8} h={8} />}
          onClick={openDrawer}
        />
      </Box>
      <Link as={NextLink} href="/">
        <Text cursor={"pointer"} as="strong" fontSize={"xl"}>
          Genshin Guide
        </Text>
      </Link>
    </Flex>
  )
}
