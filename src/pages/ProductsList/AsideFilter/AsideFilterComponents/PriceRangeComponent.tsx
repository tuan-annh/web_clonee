import classNames from 'classnames'
import { useContext } from 'react'
import { ProductsContext } from '../../ProductsList'
import { priceRanges } from '../../../../constants/productListConst.enum'

interface PriceRangeProps {
  priceRange: keyof typeof priceRanges
  textContent: string
}

function PriceRangeComponent(props: PriceRangeProps) {
  const { filters, setFilters } = useContext(ProductsContext)
  const { priceRange, textContent } = props

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
      className={classNames('w-full flex gap-3 items-center py-2 hover:text-hover', {
        'text-hover': filters.priceRange === priceRange
      })}
    >
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
    </button>
  )
}

export default PriceRangeComponent
