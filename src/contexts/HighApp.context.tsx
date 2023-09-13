import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from 'react'
import { userApi } from '../apis/user.api'
import { CartInterface, User } from '../types/user.type'
import { AxiosResponse } from 'axios'
import { getTodayDate } from '../utils/utils'
import { getProfileFromLS } from '../utils/auth.util'
import { authApi } from '../apis/auth.api'

interface AppContextInterface {
  isAuthenticated: boolean
  setisAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  userData: AxiosResponse<User, unknown> | undefined
  cartData: CartInterface
  setUserId: React.Dispatch<React.SetStateAction<string | number | undefined>>
  setCartData: React.Dispatch<React.SetStateAction<CartInterface>>
}

export const AppContext = createContext({} as AppContextInterface)

function AppProvider({ children }: { children: React.ReactNode }) {
  const lsData = getProfileFromLS()
  const [isAuthenticated, setisAuthenticated] = useState(Boolean(getProfileFromLS()))
  const [userId, setUserId] = useState<number | string>()
  const [cartData, setCartData] = useState({
    userId: userId,
    date: getTodayDate(),
    products: []
  } as CartInterface)

  const { data: userData } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => userApi.getUserData(userId || undefined)
  })

  useEffect(() => {
    if (lsData) {
      authApi.loginAccount({ username: lsData.username, password: lsData.password })
      setUserId(lsData.id)
      setisAuthenticated(true)
    }
  }, [lsData])
  // console.log(cartData)

  const appContextValues = { isAuthenticated, setisAuthenticated, userData, cartData, setUserId, setCartData }

  return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>
}

export default AppProvider
