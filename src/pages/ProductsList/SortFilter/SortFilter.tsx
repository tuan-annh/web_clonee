import React, { useContext } from 'react'
import { customSortList, sortNamesList } from '../../../constants/productListConst.enum'
import { ProductsContext } from '../ProductsList'

function SortFilter() {
  const { setFilters } = useContext(ProductsContext)
  const sortByHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value as keyof typeof customSortList
    console.log(selectValue)
    setFilters((prev) => ({ ...prev, sortType: selectValue }))
  }

  return (
    <div className='cursor-pointer border px-2 py-1' style={{ userSelect: 'none' }}>
      <label htmlFor='sortby' className='text-sm'>
        Sort by:{' '}
      </label>
      <select className='active:outline-none outline-none px-3' onChange={sortByHandle}>
        {Object.values(customSortList).map((sort, index) => (
          <option className='py-6 whitespace-normal text-sm' value={sort} key={index}>
            {sortNamesList[sort]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortFilter
