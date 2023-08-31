import { productApi } from '../../apis/productApi.api'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import path from '../../constants/path'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { ProductsListType } from '../../types/product.type'
import { ProductViewType, productViewList } from '../../constants/productListConst'
import SortFilter from './SortFilter/SortFilter'
import AsideFilter from './AsideFilter/AsideFilter'
// import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material'

interface ParamsInterface {
  category: string
  id: string
}

function ProductsList() {
  const params = useParams() as unknown as ParamsInterface
  const [productView, setProductView] = useState<ProductViewType>('grid')
  // const [sortType, setSortType] = useState('asc')
  const [productsData, setProductsData] = useState({} as ProductsListType)

  useQuery({
    queryKey: ['products', params.category],
    queryFn: () => productApi.getProducts(params.category),
    onSuccess: ({ data }) => setProductsData(data),
    keepPreviousData: true
  })

  const handleViewChange = (viewType: ProductViewType) => () => {
    setProductView(viewType)
  }

  console.log(params)

  useEffect(() => {
    console.log(productsData)
  }, [productsData])

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
      <div className='grid grid-cols-6 px-4 mt-16'>
        <div className='col-span-1'>
          <AsideFilter />
        </div>
        <div className='col-span-5'>
          <div className='flex gap-3 items-center justify-between mb-5 px-4'>
            <div>Showing 1-20 of 20 results</div>
            <div className='flex items-center gap-3 flex-grow-1'>
              <div
                className={classNames('transition-all duration-500', {
                  'opacity-100': productView === productViewList.grid,
                  'opacity-50 hover:opacity-100': productView !== productViewList.grid
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
                  'opacity-100': productView === productViewList.list,
                  'opacity-50 hover:opacity-100': productView !== productViewList.list
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
            <SortFilter setProductsData={setProductsData} />
          </div>
          {productView === productViewList.grid ? (
            <div className='grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
              {productsData[0] &&
                productsData?.map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
            </div>
          ) : (
            <div>
              {productsData[0] &&
                productsData?.map((product, index) => <ProductComponent product={product} key={index} type='list' />)}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductsList
