import { AxiosResponse } from 'axios'
import { CartInterfaceForPost, User } from '../types/user.type'
import { http } from './http'

export const userApi = {
  getAllUser() {
    return http.get<User[]>('users')
  },
  getUserData(id?: number | string) {
    // Vì useQuery không chấp nhận queryFn trả về undefined nên phải để thế này
    return id ? http.get<User>(`users/${id}`) : ({} as Promise<AxiosResponse<User, unknown>>)
  },
  // getUserCart(id?: number | string) {
  //   return id ? http.get(`/carts/user/${id}`) : undefined
  // },
  addUserCart(body: CartInterfaceForPost) {
    return http.post('carts', body)
  }
}
