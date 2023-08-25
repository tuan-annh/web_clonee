// import { useState } from 'react'
import { productApi } from '../../apis/productApi.api'
import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'

function ProductsList() {
  // const [products, setProducts] = useState({} as ProductsList)

  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'>
        <AsideFilter />
      </div>
      <div className='col-span-4 grid grid-cols-4'>
        {ProductsData?.data.map((product) => (
          <div className='m-3 overflow-hidden p-3'>
            <div className='w-full relative pt-[100%] bg-product-bg'>
              <img
                src={product.image}
                className='absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75'
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className='text-center px-4'>
              <p className='text-sm text-name-product font-semibold line-clamp-1 hover:text-hover ease-in-out duration-300'>{product.title}</p>
              <p className='text-main font-semibold text-sm'>{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
