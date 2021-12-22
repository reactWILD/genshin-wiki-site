import { Box } from "@chakra-ui/react"
import { useMemo } from "react"
import AppHeader from "../components/AppHeader"

export default function Home() {
  const currentWeekDay = useMemo(() => {
    const currentDay = new Date().getDay()
    const weekDays = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ]

    return weekDays[currentDay]
  }, [])

  return (
    <>
      <Box>
        <AppHeader />

        <Box as={"main"}>
          <Box p={"7px"} pos={"absolute"}></Box>
        </Box>
      </Box>
    </>
  )
}
