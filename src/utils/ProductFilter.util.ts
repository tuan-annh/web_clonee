import { FiltersType } from '../types/Filters.type'
import { ProductsListType } from '../types/product.type'

export const customProductFilter = {
  price_asc: (products: ProductsListType) => [...products].sort((a, b) => a.price - b.price),
  price_desc: (products: ProductsListType) => [...products].sort((a, b) => b.price - a.price),
  name_asc: (products: ProductsListType) => [...products].sort((a, b) => a.title.localeCompare(b.title)),
  name_desc: (products: ProductsListType) => [...products].sort((a, b) => -a.title.localeCompare(b.title)),
  rating_asc: (products: ProductsListType) => [...products].sort((a, b) => a.rating.rate - b.rating.rate),
  rating_desc: (products: ProductsListType) => [...products].sort((a, b) => -(a.rating.rate - b.rating.rate))
}

const discount = 0.8

export const priceRangeFilter = {
  first_range: (products: ProductsListType) => [...products].filter((product) => product.price * discount <= 50),
  second_range: (products: ProductsListType) =>
    [...products].filter((product) => product.price * discount > 50 && product.price * discount <= 100),
  third_range: (products: ProductsListType) => [...products].filter((product) => product.price * discount > 100)
}

export const ratingRangeFilter = (products: ProductsListType, stars: number) =>
  [...products].filter((product) => Number(product.rating.rate) >= stars)

export const filterAfterFetch = (data: ProductsListType, filters: FiltersType) => {
  let filteredData = data
  filteredData =
    filters.sortType && filters.sortType !== 'none' ? customProductFilter[filters.sortType](filteredData) : filteredData
  filteredData = filters.priceRange ? priceRangeFilter[filters.priceRange](filteredData) : filteredData
  filteredData = filters.rating ? ratingRangeFilter(filteredData, filters.rating) : filteredData
  return filteredData
}
