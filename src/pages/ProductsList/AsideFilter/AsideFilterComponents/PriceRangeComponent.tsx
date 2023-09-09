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
  // const [onHover, setOnHover] = useState(false)

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
      className={classNames('flex w-full items-center justify-between py-2 hover:text-hover', {
        'text-hover': filters.priceRange === priceRange
      })}
      // onMouseOver={() => setOnHover(true)}
      // onMouseLeave={() => setOnHover(false)}
    >
      <div className='flex items-center gap-3'>
        <div
          className={classNames('h-4 w-4 rounded-full border border-hover', {
            'bg-hover': filters.priceRange === priceRange
          })}
        >
          <svg fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='white'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
          </svg>
        </div>
        <p>{textContent}</p>
      </div>
      {/* <div
        className={classNames('pr-6 opacity-0', {
          'opacity-100': onHover && filters.priceRange === priceRange
        })}
      >
        <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div> */}
    </button>
  )
}

export default PriceRangeComponent
