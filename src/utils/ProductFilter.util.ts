import { ProductsListType } from '../types/product.type'

export const customProductFilter = {
  price_asc: (products: ProductsListType) => [...products].sort((a, b) => a.price - b.price),
  price_desc: (products: ProductsListType) => [...products].sort((a, b) => b.price - a.price),
  name_sort: (products: ProductsListType, sort_order: 'asc' | 'desc') => {
    if (sort_order === 'asc') return [...products].sort((a, b) => a.title.localeCompare(b.title))
    return [...products].sort((a, b) => -a.title.localeCompare(b.title))
  },
  rating_sort: (products: ProductsListType, sort_order: 'asc' | 'desc') => {
    const ratio = sort_order === 'asc' ? 1 : -1
    return [...products].sort((a, b) => ratio * (a.rating.rate - b.rating.rate))
  }
}
