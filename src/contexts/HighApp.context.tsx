import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from 'react'
import { userApi } from '../apis/user.api'
import { AxiosResponse } from 'axios'
import { getProfileFromLS } from '../utils/auth.util'
import { authApi } from '../apis/auth.api'
import { User } from '../types/user.type'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  userData: AxiosResponse<User, unknown> | undefined
  setUserId: React.Dispatch<React.SetStateAction<string | number | undefined>>
}

export const AppContext = createContext({} as AppContextInterface)

function AppProvider({ children }: { children: React.ReactNode }) {
  const lsData = getProfileFromLS()
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(getProfileFromLS()))
  const [userId, setUserId] = useState<number | string>()

  const { data: userData } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => userApi.getUserData(userId || undefined)
  })

  useEffect(() => {
    if (lsData) {
      authApi.loginAccount({ username: lsData.username, password: lsData.password })
      setUserId(lsData.id)
      setIsAuthenticated(true)
    }
  }, [lsData])
  // console.log(cartData)

  const appContextValues = { isAuthenticated, setIsAuthenticated, userData, setUserId }

  return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>
}

export default AppProvider
