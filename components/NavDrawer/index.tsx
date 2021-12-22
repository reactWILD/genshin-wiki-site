import {
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { AiFillHome } from "react-icons/ai"
import { BsFillPeopleFill } from "react-icons/bs"
import { GiGlowingArtifact } from "react-icons/gi"
import { RiSwordLine } from "react-icons/ri"
import { useNavDrawerContext } from "../../context/navDrawer"

const navigationLinks = [
  {
    text: "Home",
    icon: <AiFillHome />,
    path: "/",
  },
  {
    text: "Characters list",
    icon: <BsFillPeopleFill />,
    path: "/characters",
  },
  {
    text: "Weapons list",
    icon: <RiSwordLine />,
    path: "/weapons",
  },
  {
    text: "Artifacts",
    icon: <GiGlowingArtifact />,
    path: "/artifacts",
  },
]

export default function NavDrawer() {
  const { isOpen, closeDrawer } = useNavDrawerContext()

  const router = useRouter()

  function redirectTo(path: string) {
    closeDrawer()

    router.push(path)
  }

  return (
    <>
      <Box
        zIndex={"2"}
        w={"100vw"}
        height={"100vh"}
        bg={"#000"}
        opacity={0.199}
        pos={"absolute"}
        top={"0px"}
        left={"0px"}
        display={!isOpen && "none"}
      />

      <Box
        p={"12px 10px 5px 10px"}
        bg={"gray.700"}
        w={"300px"}
        zIndex={"3"}
        h={"100vh"}
        position={"absolute"}
        transition={"500ms"}
        marginLeft={!isOpen && "-1000px"}
      >
        <Flex align={"center"} justify={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"3xl"}>
            Menu
          </Text>
          <CloseButton size={"lg"} onClick={closeDrawer} />
        </Flex>

        <Divider my={"15px"} />

        <Box>
          <VStack as={"nav"}>
            {navigationLinks.map((item) => (
              <Button
                colorScheme={router.pathname === item.path ? "teal" : undefined}
                onClick={() => redirectTo(item.path)}
                w={"100%"}
                leftIcon={item.icon}
                key={item.path}
              >
                {item.text}
              </Button>
            ))}
          </VStack>
        </Box>
      </Box>
    </>
  )
}
