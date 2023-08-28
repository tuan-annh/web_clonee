import { Product, ProductsListType } from '../types/product.type'
import { http } from './http'

export const productApi = {
  getProducts() {
    return http.get<ProductsListType>('products')
  },
  getProductDetail(id: string | number) {
    return http.get<Product>(`products/${id}`)
  }
}
