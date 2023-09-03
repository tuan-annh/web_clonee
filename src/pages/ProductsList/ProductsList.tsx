import { productApi } from '../../apis/productApi.api'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import path from '../../constants/path'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { createContext, useState } from 'react'
import classNames from 'classnames'
import { ProductsListType } from '../../types/product.type'
import { ProductViewType, productViewList } from '../../constants/productListConst.enum'
import SortFilter from './SortFilter/SortFilter'
import AsideFilter from './AsideFilter/AsideFilter'
import { filterAfterFetch } from '../../utils/ProductFilter.util'
import { CircularProgress } from '@mui/material'
import { AxiosResponse } from 'axios'
import { FiltersType } from '../../types/Filters.type'
import { createPortal } from 'react-dom'

interface ParamsInterface {
  category: string
  id: string
}
interface ProductsContextType {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
  categoriesData: AxiosResponse<string[]> | undefined
}

export const ProductsContext = createContext({} as ProductsContextType)

function ProductsList() {
  const params = useParams() as unknown as ParamsInterface
  const [productView, setProductView] = useState<ProductViewType>('grid')
  const [productsData, setProductsData] = useState({} as ProductsListType)
  const [filters, setFilters] = useState({} as FiltersType)
  const [showModal, setShowModal] = useState(true)

  const { data: categoriesData, isInitialLoading: isFirstAsideLD } = useQuery({
    queryKey: ['categories'],
    queryFn: () => productApi.getCategories()
  })

  const { isFetching, isInitialLoading: isFirstProductsLD } = useQuery({
    queryKey: ['products', params.category, filters],
    queryFn: () => productApi.getProducts(params.category, filters.queryParams ? filters.queryParams : undefined),
    onSuccess: ({ data }) => {
      setProductsData(filterAfterFetch(data, filters))
      console.log(params)
    },
    keepPreviousData: true
  })

  const handleViewChange = (viewType: ProductViewType) => () => {
    setProductView(viewType)
  }

  return (
    <ProductsContext.Provider value={{ filters, setFilters, categoriesData }}>
      <div
        className='min-h-screen bg-slate-300 flex items-center justify-center'
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
      {isFirstAsideLD && isFirstProductsLD ? (
        <div className='h-screen relative text-center'>
          <CircularProgress style={{ color: '#c7ab62' }} className='absolute top-20' />
        </div>
      ) : (
        <div className='min-h-screen grid grid-cols-6 px-4 py-16'>
          <div className='hidden lg:block lg:col-span-1'>
            <AsideFilter />
          </div>
          {showModal &&
            createPortal(
              <div className='fixed top-0 z-50 h-screen w-screen bg-main/50 grid grid-cols-6'>
                <div className='bg-white col-span-4 sm:col-span-3 md:col-span-2 overflow-y-scroll'>
                  <div className='text-product-bg bg-main px-6 flex justify-between items-center'>
                    <p className='text-sm font-semibold'>Filters</p>
                    <button className='p-4 cursor-pointer' onClick={() => setShowModal(false)}>
                      <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </button>
                  </div>
                  <div className='p-4'>
                    <AsideFilter />
                  </div>
                </div>
              </div>,
              document.body
            )}
          <div className='col-span-6 lg:col-span-5'>
            <div className='text-main flex items-center justify-between mb-5 px-4'>
              <div className='lg:hidden text-main flex gap-3'>
                <button className='flex' onClick={() => setShowModal(true)}>
                  <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                    />
                  </svg>
                  <p className='font-semibold mx-2'>Filters</p>
                </button>
                <div>
                  Showing <span className='font-semibold'>1 - {productsData.length} </span>
                  of <span className='font-semibold'>{productsData.length}</span> results
                </div>
              </div>
              <div className='hidden lg:block w-[210px]'>
                Showing <span className='font-semibold'>1 - {productsData.length} </span>
                of <span className='font-semibold'>{productsData.length}</span> results
              </div>
              <div className='hidden lg:flex items-center gap-3 flex-grow-1'>
                <div
                  className={classNames('transition-all duration-500 text-main', {
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
                  className={classNames('transition-all duration-500 text-main', {
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
              <SortFilter />
            </div>
            <div className={classNames('ease-in-out duration-200', { 'opacity-40': isFetching })}>
              {productView === productViewList.grid ? (
                <div className='grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-20'>
                  {productsData[0] &&
                    productsData?.map((product, index) => (
                      <ProductComponent product={product} key={index} type='grid' />
                    ))}
                </div>
              ) : (
                <div className='pb-5'>
                  {productsData[0] &&
                    productsData?.map((product, index) => (
                      <ProductComponent product={product} key={index} type='list' />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </ProductsContext.Provider>
  )
}

export default ProductsList
