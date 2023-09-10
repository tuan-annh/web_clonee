import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'
import { userApi } from '../apis/user.api'
import { CartInterface, User } from '../types/user.type'
import { AxiosResponse } from 'axios'
import { getTodayDate } from '../utils/utils'

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
  const [isAuthenticated, setisAuthenticated] = useState(false)
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

  const appContextValues = { isAuthenticated, setisAuthenticated, userData, cartData, setUserId, setCartData }

  return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>
}

export default AppProvider
