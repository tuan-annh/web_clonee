// import { useState } from 'react'
import { productApi } from '../../apis/productApi.api'
import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import { Link } from 'react-router-dom'
import path from '../../constants/path'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { useState } from 'react'
import classNames from 'classnames'

// Khai báo danh sách kiểu view
const ProductViewList = {
  grid: 'grid',
  list: 'list'
}

// kiểu dữ liệu view trả về. Mặc dù có 2 kiểu view là grid và list thôi nhưng khai báo ra cho mn dễ type hơn nhé.
export type ProductViewType = keyof typeof ProductViewList

function ProductsList() {
  const [productView, setProductView] = useState<ProductViewType>('grid')

  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  const handleViewChange = (viewType: ProductViewType) => () => {
    setProductView(viewType)
  }

  return (
    <>
      <div
        className='h-screen bg-slate-300 flex items-center justify-center'
        style={{
          backgroundImage: 'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb_1920x.jpg?v=1632273468)'
        }}
      >
        <div>
          <h1 className='text-6xl font-semibold text-main'>Products</h1>
          <div className='text-center mt-5'>
            <Link to={path.home} className='text-main-text'>
              Home
            </Link>
            <span> / </span>
            <span>Products</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-6 px-3 mt-16'>
        <div className='col-span-1'>
          <AsideFilter />
        </div>
        <div className='col-span-5'>
          <div className='flex gap-3 justify-between mb-5 px-4'>
            <div>Showing 1-20 of 20 results</div>
            <div className='flex items-center gap-3 flex-grow-1'>
              <div
                className={classNames('transition-all duration-500', {
                  'opacity-100': productView === ProductViewList.grid,
                  'opacity-50 hover:opacity-100': productView !== ProductViewList.grid
                })}
                onClick={handleViewChange('grid')}
              >
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-7 h-7 cursor-pointer '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
                  />
                </svg>
              </div>
              <div
                className={classNames('transition-all duration-500', {
                  'opacity-100': productView === ProductViewList.list,
                  'opacity-50 hover:opacity-100': productView !== ProductViewList.list
                })}
                onClick={handleViewChange('list')}
              >
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 cursor-pointer '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
              </div>
            </div>
            <div>Sort by: Alphabetically, A-Z</div>
          </div>
          {productView === ProductViewList.grid ? (
            <div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
              {ProductsData?.data.map((product, index) => (
                <ProductComponent product={product} key={index} type='grid' />
              ))}
            </div>
          ) : (
            <div>
              {ProductsData?.data.map((product, index) => (
                <ProductComponent product={product} key={index} type='list' />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductsList
