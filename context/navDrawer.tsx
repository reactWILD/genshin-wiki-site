import { createContext, useContext, useState } from "react"

interface INavDrawerContext {
  isOpen: boolean
  toggleDrawer(): void
  closeDrawer(): void
  openDrawer(): void
}

const NavDrawerContext = createContext<INavDrawerContext>(
  {} as INavDrawerContext
)

interface Props {
  children: React.ReactNode
}

export function NavDrawerProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDrawer() {
    setIsOpen(isOpen ? false : true)
  }

  const defaultValues: INavDrawerContext = {
    isOpen,
    toggleDrawer,
    openDrawer() {
      setIsOpen(true)
    },
    closeDrawer() {
      setIsOpen(false)
    },
  }

  return (
    <NavDrawerContext.Provider value={defaultValues}>
      {children}
    </NavDrawerContext.Provider>
  )
}

export function useNavDrawerContext() {
  return useContext(NavDrawerContext)
}
