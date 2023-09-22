import axios, { AxiosError, AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/HttpStatusCode.enum'

class Http {
  instance: AxiosInstance
  private accessToken: string | undefined
  constructor() {
    this.accessToken = Cookies.get('access_token')
    this.instance = axios.create({
      baseURL: 'https://fakestoreapi.com/',
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.Unauthorized) toast.error(error.message)
        return Promise.reject(error)
      }
    )
  }
}

export const http = new Http().instance
