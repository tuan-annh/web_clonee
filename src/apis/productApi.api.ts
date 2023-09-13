import { Product, ProductsListType } from '../types/product.type'
import { http } from './http'

export const productApi = {
  getProducts(category?: string, params?: { limit: string | number }) {
    const paramsObject = params
      ? {
          params: {
            limit: params?.limit || 20
          }
        }
      : {}
    return category
      ? http.get<ProductsListType>(`products/category/${category}`, paramsObject)
      : http.get<ProductsListType>('products', paramsObject)
  },
  getProductDetail(id: string | number) {
    return http.get<Product>(`products/${id}`)
  },
  getCategories() {
    return http.get<string[]>('products/categories')
  }
}
