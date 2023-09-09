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
import AsideModal from './AsideFilter/AsideFilterComponents/AsideModal'

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
  const [showModal, setShowModal] = useState(false)

  const { data: categoriesData, isInitialLoading: isFirstAsideLD } = useQuery({
    queryKey: ['categories'],
    queryFn: () => productApi.getCategories()
  })

  const { isFetching, isInitialLoading: isFirstProductsLD } = useQuery({
    queryKey: ['products', params.category, filters],
    queryFn: () => productApi.getProducts(params.category, filters.queryParams ? filters.queryParams : undefined),
    onSuccess: ({ data }) => {
      setProductsData(filterAfterFetch(data, filters))
    },
    keepPreviousData: true
  })

  const handleViewChange = (viewType: ProductViewType) => () => {
    setProductView(viewType)
  }

  return (
    <ProductsContext.Provider value={{ filters, setFilters, categoriesData }}>
      <div
        className='flex min-h-screen w-screen items-center justify-center bg-slate-300 bg-cover bg-no-repeat'
        style={{
          backgroundImage: 'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb_1920x.jpg?v=1632273468)'
        }}
      >
        <div>
          <h1 className='text-6xl font-semibold text-main'>Products</h1>
          <div className='mt-5 text-center'>
            <Link to={path.home} className='text-main-text'>
              Home
            </Link>
            <span> / </span>
            <span>Products</span>
          </div>
        </div>
      </div>
      {isFirstAsideLD && isFirstProductsLD ? (
        <div className='relative h-screen text-center'>
          <CircularProgress style={{ color: '#c7ab62' }} className='absolute top-20' />
        </div>
      ) : (
        <div className='flex px-4 py-16'>
          <div className='sticky top-0 hidden min-w-[240px] lg:block'>
            <AsideFilter />
          </div>
          <AsideModal showModal={showModal} setShowModal={setShowModal} />
          <div className='flex-grow'>
            <div className='mb-5 flex items-center justify-between px-4 text-main'>
              <div className='flex gap-3 text-main lg:hidden'>
                <button className='flex' onClick={() => setShowModal(true)}>
                  <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                    />
                  </svg>
                  <p className='mx-2 font-semibold'>Filters</p>
                </button>
                <div className='hidden md:block'>
                  Showing <span className='font-semibold'>1 - {productsData.length} </span>
                  of <span className='font-semibold'>{productsData.length}</span> results
                </div>
              </div>
              <div className='hidden w-[210px] lg:block'>
                Showing <span className='font-semibold'>1 - {productsData.length} </span>
                of <span className='font-semibold'>{productsData.length}</span> results
              </div>
              <div className='flex-grow-1 hidden items-center gap-3 lg:flex'>
                <div
                  className={classNames('text-main transition-all duration-500', {
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
                    className='h-7 w-7 cursor-pointer '
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
                    />
                  </svg>
                </div>
                <div
                  className={classNames('text-main transition-all duration-500', {
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
                    className='h-8 w-8 cursor-pointer '
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
            <div className='relative'>
              {isFetching && (
                <div className='absolute top-40 z-10 flex w-full justify-center'>
                  <CircularProgress style={{ color: '#c7ab62' }} />
                </div>
              )}
              <div className={classNames('duration-500 ease-in-out', { 'translate-y-5 opacity-0': isFetching })}>
                {productView === productViewList.grid ? (
                  <div className='grid pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'>
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
        </div>
      )}
    </ProductsContext.Provider>
  )
}

export default ProductsList
