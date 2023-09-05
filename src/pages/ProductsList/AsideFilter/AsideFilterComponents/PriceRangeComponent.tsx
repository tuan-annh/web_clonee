import classNames from 'classnames'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../ProductsList'
import { priceRanges } from '../../../../constants/productListConst.enum'

interface PriceRangeProps {
  priceRange: keyof typeof priceRanges
  textContent: string
}

function PriceRangeComponent(props: PriceRangeProps) {
  const { filters, setFilters } = useContext(ProductsContext)
  const { priceRange, textContent } = props
  const [onHover, setOnHover] = useState(false)

  const handleOnClick = () => {
    if (filters.priceRange === priceRange) {
      setFilters((prev) => ({ ...prev, priceRange: undefined }))
    } else {
      setFilters((prev) => ({ ...prev, priceRange: priceRange }))
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className={classNames('w-full flex justify-between items-center py-2 hover:text-hover', {
        'text-hover': filters.priceRange === priceRange
      })}
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className='flex gap-3 items-center'>
        <div
          className={classNames('w-4 h-4 rounded-full border border-hover', {
            'bg-hover': filters.priceRange === priceRange
          })}
        >
          <svg fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='white'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
          </svg>
        </div>
        <p>{textContent}</p>
      </div>
      <div
        className={classNames('pr-6 opacity-0', {
          'opacity-100': onHover && filters.priceRange === priceRange
        })}
      >
        <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
    </button>
  )
}

export default PriceRangeComponent
