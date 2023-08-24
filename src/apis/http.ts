import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  // private accessToken: string
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://fakestoreapi.com/',
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const http = new Http().instance

class JSON_HTTP {
  instance: AxiosInstance
  // private accessToken: string
  constructor() {
    this.instance = axios.create({
      baseURL: './src/assets/users.json'
      // timeout: 20000,
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    })
  }
}

export const offlineHttp = new JSON_HTTP().instance
