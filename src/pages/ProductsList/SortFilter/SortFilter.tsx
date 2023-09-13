import { useContext, useEffect, useRef, useState } from 'react'
import { customSortList, sortNamesList } from '../../../constants/productListConst.enum'
import { ProductsContext } from '../ProductsList'
import classNames from 'classnames'
import SortOptionsModal from './SortOptionsModal'

function SortFilter() {
  const { setFilters, filters } = useContext(ProductsContext)
  const [onDrop, setOnDrop] = useState(false)
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const sortFilterModalRef = useRef<HTMLUListElement | null>(null)

  const sortByHandle2 = (value: keyof typeof customSortList) => () => {
    // console.log(value)
    setFilters((prev) => ({ ...prev, sortType: value }))
    setOnDrop(false)
  }

  const dropDownToggle = () => {
    if (onDrop) {
      setOnDrop(false)
    } else {
      setOnDrop(true)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isDropDownClick = dropDownRef.current?.contains(event.target as Node)
      const isSortFilterModalClick = sortFilterModalRef.current?.contains(event.target as Node)
      if (!isDropDownClick && !isSortFilterModalClick) {
        setOnDrop(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    // <div className='cursor-pointer border px-2 py-1' style={{ userSelect: 'none' }}>
    //   <label htmlFor='sortby' className='text-sm'>
    //     Sort by:{' '}
    //   </label>
    //   <select className='px-3 outline-none active:outline-none' onChange={sortByHandle} value={filters.sortType}>
    //     {Object.values(customSortList).map((sort, index) => (
    //       <option className='whitespace-normal py-6 text-sm' value={sort} key={index}>
    //         {sortNamesList[sort]}
    //       </option>
    //     ))}
    //   </select>
    // </div>
    <div>
      <div id='sort-filter' className='relative w-[240px] text-sm text-main-text' ref={dropDownRef}>
        <button
          className='flex w-full select-none items-center justify-between gap-1 border px-4 py-2'
          onClick={dropDownToggle}
        >
          <p>Sort by:</p>
          <div
            className={classNames('flex flex-grow hover:text-hover', {
              'text-hover': onDrop,
              'text-main': !onDrop
            })}
          >
            <p className='flex-grow duration-500 ease-in-out'>{sortNamesList[customSortList[filters.sortType]]}</p>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classNames('h-5 w-5 duration-500 ease-in-out', {
                'rotate-180': onDrop
              })}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
        </button>
        <ul
          className={classNames(
            'pointer-events-none absolute top-16 z-10 hidden w-full border opacity-0 duration-300 ease-in-out md:block',
            {
              'pointer-events-auto scale-100 opacity-100': onDrop,
              'scale-90': !onDrop
            }
          )}
        >
          {Object.values(customSortList).map((sort, index) => (
            <li
              value={sort}
              key={index}
              className={classNames(
                'w-full cursor-pointer px-3 py-3 text-left duration-300 ease-in-out hover:text-hover',
                {
                  'bg-hover text-white hover:text-white': filters.sortType === sort,
                  'bg-white': !(filters.sortType === sort)
                }
              )}
              onClick={sortByHandle2(sort)}
            >
              {sortNamesList[sort]}
            </li>
          ))}
        </ul>
      </div>
      <SortOptionsModal onDrop={onDrop} setOnDrop={setOnDrop} sortFilterModalRef={sortFilterModalRef} />
    </div>
  )
}

export default SortFilter
