import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { Character } from "../../types/Character"
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter"
import handleImagesURL from "../../utils/handleImagesURL"
import CharacterCard from "../CharacterCard"
import StyledImage from "../StyledImage"

interface Props {
  elements: {
    type: string
    icon: string
  }[]

  filterCharactersByElement(element: string): Character[]
}

export default function ListCharacters({
  elements,
  filterCharactersByElement,
}: Props) {
  return (
    <Tabs width={"100%"}>
      <TabList display={"flex"} justifyContent={"center"}>
        {elements.map((item) => (
          <Tooltip key={Math.random()} label={capitalizeFirstLetter(item.type)}>
            <Tab>
              <StyledImage
                width={"40px"}
                height={"42px"}
                src={handleImagesURL(item.icon)}
              />
            </Tab>
          </Tooltip>
        ))}
      </TabList>
      <TabPanels>
        {elements.map((visElement) => (
          <TabPanel key={Math.random()}>
            {filterCharactersByElement(visElement.type).length >= 1 ? (
              filterCharactersByElement(visElement.type).map((char) => (
                <CharacterCard key={Math.random()} character={char} />
              ))
            ) : (
              <Box>
                <Text> No have {visElement.type} characters </Text>
              </Box>
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
