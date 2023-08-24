import { User } from '../types/user.type'
import { http } from './http'

export const authApi = {
  loginAccount(body: { username: string; password: string }) {
    return http.post('/auth/login', body)
  },
  registerAccount(body: User) {
    return http.post(`/users`, body)
  }
}
