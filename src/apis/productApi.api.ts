import { Product, ProductsListType } from '../types/product.type'
import { http } from './http'

export const productApi = {
  getProducts(category?: string) {
    return category
      ? http.get<ProductsListType>(`products/category/${category}`)
      : http.get<ProductsListType>('products')
  },
  getProductDetail(id: string | number) {
    return http.get<Product>(`products/${id}`)
  }
}
