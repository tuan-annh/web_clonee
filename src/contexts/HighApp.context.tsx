import { createContext, useState } from 'react'

interface AppContextInterface {
  isAuthenticated: boolean
  setisAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext({} as AppContextInterface)

function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setisAuthenticated] = useState(true)

  return <AppContext.Provider value={{ isAuthenticated, setisAuthenticated }}>{children}</AppContext.Provider>
}

export default AppProvider
