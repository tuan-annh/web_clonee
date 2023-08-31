import React from 'react'
import { customSortList } from '../../../constants/productListConst'
import { customProductFilter } from '../../../utils/ProductFilter.util'
import { ProductsListType } from '../../../types/product.type'

interface SortFilterInterface {
  setProductsData: React.Dispatch<React.SetStateAction<ProductsListType>>
}

function SortFilter(props: SortFilterInterface) {
  const { setProductsData } = props
  const sortByHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value as unknown
    switch (selectValue) {
      case customSortList.name_asc:
        setProductsData((prev) => customProductFilter.name_sort(prev, 'asc'))
        break
      case customSortList.name_desc:
        setProductsData((prev) => customProductFilter.name_sort(prev, 'desc'))
        break
      case customSortList.price_asc:
        setProductsData((prev) => customProductFilter.price_asc(prev))
        break
      case customSortList.price_desc:
        setProductsData((prev) => customProductFilter.price_desc(prev))
        break
      case customSortList.rating_asc:
        setProductsData((prev) => customProductFilter.rating_sort(prev, 'asc'))
        break
      case customSortList.rating_desc:
        setProductsData((prev) => customProductFilter.rating_sort(prev, 'desc'))
        break
      default:
        break
    }
  }

  return (
    <div className='text-sm cursor-pointer border px-2 py-1' style={{ userSelect: 'none' }}>
      <label htmlFor='sortby'>Sort by: </label>
      <select className='active:outline-none outline-none px-3' onChange={sortByHandle}>
        <option className='py-2' value={customSortList.name_asc}>
          Alphabetically, A-Z
        </option>
        <option className='py-2' value={customSortList.name_desc}>
          Alphabetically, Z-A
        </option>
        <option className='py-2' value={customSortList.price_asc}>
          Price, low to high
        </option>
        <option className='py-2' value={customSortList.price_desc}>
          Price, high to low
        </option>
        <option className='py-2' value={customSortList.rating_asc}>
          Rate, low to high
        </option>
        <option className='py-2' value={customSortList.rating_desc}>
          Rate, high to low
        </option>
      </select>
    </div>
  )
}

export default SortFilter
