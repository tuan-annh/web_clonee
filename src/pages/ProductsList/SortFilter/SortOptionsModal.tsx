import classNames from 'classnames'
import { createPortal } from 'react-dom'
import { customSortList, sortNamesList } from '../../../constants/productListConst.enum'
import { useContext } from 'react'
import { ProductsContext } from '../ProductsList'

interface Props {
  onDrop: boolean
  setOnDrop: React.Dispatch<React.SetStateAction<boolean>>
  sortFilterModalRef: React.MutableRefObject<HTMLUListElement | null>
}

function SortOptionsModal({ onDrop, setOnDrop, sortFilterModalRef }: Props) {
  const { filters, setFilters } = useContext(ProductsContext)
  const sortByModalHandle = (value: keyof typeof customSortList) => () => {
    // console.log(value)
    setFilters((prev) => ({ ...prev, sortType: value }))
    setOnDrop(false)
  }

  return createPortal(
    <ul
      className={classNames(
        'fixed bottom-0 z-50 w-full border bg-white pb-3 text-sm duration-700 ease-in-out md:hidden',
        {
          'translate-y-0 opacity-100': onDrop && window.innerHeight == 768,
          'translate-y-full': !onDrop
        }
      )}
      ref={sortFilterModalRef}
    >
      {Object.values(customSortList).map((sort, index) => (
        <li
          value={sort}
          key={index}
          className={classNames('w-full cursor-pointer px-3 py-3 text-left duration-300 ease-in-out hover:text-hover', {
            'bg-hover text-white hover:text-white': filters.sortType === sort
          })}
          onClick={sortByModalHandle(sort)}
        >
          {sortNamesList[sort]}
        </li>
      ))}
    </ul>,
    document.body
  )
}

export default SortOptionsModal
