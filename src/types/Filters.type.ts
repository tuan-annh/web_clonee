import { customSortList, priceRanges } from '../constants/productListConst.enum'

export interface FiltersType {
  priceRange: keyof typeof priceRanges | undefined
  sortType: keyof typeof customSortList
  rating: number | undefined
  queryParams:
    | {
        limit: string | number
      }
    | undefined
}
