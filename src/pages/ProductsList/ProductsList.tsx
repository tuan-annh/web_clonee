// import { useState } from 'react'
import { productApi } from '../../apis/productApi.api'
import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import { Link } from 'react-router-dom'
import path from '../../constants/path'
import ProductComponent from '../../components/ProductComponent/ProductComponent'

function ProductsList() {
  // const [products, setProducts] = useState({} as ProductsList)

  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

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
        <div className='lg:col-span-1'>
          <AsideFilter />
        </div>
        <div className='col-span-5 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          {ProductsData?.data.map((product, index) => <ProductComponent product={product} key={index} />)}
        </div>
      </div>
    </>
  )
}

export default ProductsList
