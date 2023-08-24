import { Product, ProductsList } from '../types/product.type'
import { http } from './http'

export const productApi = {
  getProducts() {
    return http.get<ProductsList>('products')
  },
  getProductDetail(id: string) {
    return http.get<Product>(`products/${id}`)
  }
}
