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
import MobileFilterButton from './OtherComponents/MobileFilterButton'
import ProductsViewToggle from './OtherComponents/ProductsViewToggle'

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
  const [filters, setFilters] = useState({ sortType: 'none' } as FiltersType)
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
        className='flex h-screen items-center justify-center bg-slate-300 bg-cover bg-no-repeat'
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
        <div className='mx-auto flex min-h-screen max-w-[1980px] px-4 py-16'>
          <div className='sticky top-0 hidden min-w-[240px] lg:block'>
            <AsideFilter />
          </div>
          <AsideModal showModal={showModal} setShowModal={setShowModal} />
          <div className='flex-grow'>
            <div className='mb-5 flex items-center justify-between px-4 text-main'>
              <MobileFilterButton productsData={productsData} setShowModal={setShowModal} />
              <div className='hidden w-[210px] lg:block'>
                Showing <span className='font-semibold'>1 - {productsData.length} </span>
                of <span className='font-semibold'>{productsData.length}</span> results
              </div>
              <ProductsViewToggle handleViewChange={handleViewChange} productView={productView} />
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
                  <div className='grid grid-cols-1 pb-20 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'>
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
