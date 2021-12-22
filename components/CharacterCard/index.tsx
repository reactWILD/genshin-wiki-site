import { Box } from "@chakra-ui/react"
import { Character } from "../../types/Character"
import handleImagesURL from "../../utils/handleImagesURL"
import StyledImage from "../StyledImage"

interface Props {
  character: Character
}

export default function CharacterCard({ character }: Props) {
  const borderBottomRadius = "30px"

  const cardBackgroundColorHandler = {
    anemo: "teal.500",
    dendro: "green.500",
    cryo: "cyan.500",
    geo: "yellow.500",
    electro: "purple.500",
    hydro: "blue.500",
    pyro: "red.500",
  }

  return (
    <Box
      pos={"relative"}
      bg={cardBackgroundColorHandler[character.element]}
      borderRadius={"10px"}
      width={"250px"}
      borderBottomRadius={borderBottomRadius}
    >
      <StyledImage
        borderBottomRadius={borderBottomRadius}
        src={handleImagesURL(character.banner)}
        width={"250px"}
        height={"477px"}
      />

      <Box
        bottom={"0px"}
        pos={"absolute"}
        height={"150px"}
        borderBottomRadius={borderBottomRadius}
        width={"100%"}
        bg={"gray.600"}
      >
        {character.name}
      </Box>
    </Box>
  )
}
