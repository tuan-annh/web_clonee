export interface User {
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  id: number
  address?: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

// Type cho cart
export interface CartInterface {
  id?: number
  userId: number
  date: string
  products: CartProduct[]
  __v?: number
}

// Type cho kiểu dữ liệu để post lên api (post add cart)

export interface CartProduct {
  productId: number
  quantity: number
}
