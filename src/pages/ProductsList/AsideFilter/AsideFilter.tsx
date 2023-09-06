import { useContext } from 'react'
import CategoryLink from './AsideFilterComponents/CategoryLink'
import PriceRangeComponent from './AsideFilterComponents/PriceRangeComponent'
import { ProductsContext } from '../ProductsList'
import RatingStars from './AsideFilterComponents/RatingStars'
import { FiltersType } from '../../../types/Filters.type'

function AsideFilter() {
  const { categoriesData, setFilters } = useContext(ProductsContext)

  const handleProductLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === '') {
      setFilters((prev) => ({ ...prev, queryParams: undefined }))
      return
    }
    if (!Number.isNaN(Number(value))) {
      setFilters((prev) => ({ ...prev, queryParams: { limit: value } }))
    }
  }

  const clearAllFilter = () => {
    setFilters({} as FiltersType)
  }

  return (
    <>
      <div>
        <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Categories</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div>
        <div className='py-5 text-main-text'>
          <CategoryLink category='products' />
          {categoriesData?.data.map((category, index) => <CategoryLink category={category} key={index} />)}
        </div>
      </div>
      <div>
        <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Filter By Price</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div>
        <div className='py-5 text-main-text'>
          <PriceRangeComponent priceRange='first_range' textContent='$0 - $50' />
          <PriceRangeComponent priceRange='second_range' textContent='$50 - $100' />
          <PriceRangeComponent priceRange='third_range' textContent='> $100' />
        </div>
      </div>
      <div>
        <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Products Limit</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div>
        <div className='py-5 text-main-text'>
          <input
            type='text'
            placeholder='type your limit'
            className='w-11/12 rounded outline-none border-name-product/40 px-3 py-2 border'
            onChange={handleProductLimit}
          />
        </div>
      </div>
      <div>
        <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Filter By Rating</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div>
        <div className='py-5 text-main-text'>
          <RatingStars star={1} />
          <RatingStars star={2} />
          <RatingStars star={3} />
          <RatingStars star={4} />
          <RatingStars star={5} />
        </div>
      </div>
      <div>
        {/* <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Clear All Filters</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div> */}
        <button
          onClick={clearAllFilter}
          className='w-full py-2 border border-main bg-main text-product-bg hover:bg-white hover:text-main ease-in-out duration-300 rounded'
        >
          Clear All Filters
        </button>
      </div>
    </>
  )
}

export default AsideFilter
