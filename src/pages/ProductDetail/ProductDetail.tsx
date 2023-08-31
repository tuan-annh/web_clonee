// ProductDetail.tsx
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../apis/productApi.api'
import { Button } from '@mui/base/Button'

function ProductDetail() {
  const { id } = useParams<{ id: string }>()

  const { data: productDetail } = useQuery(['productDetail', id], () => {
    if (id) return productApi.getProductDetail(id)
  })

  if (!productDetail) {
    return <div>Loading...</div>
  }

  // Render the product details
  return (
    <div className='w-full mx-auto p-6 px-[60px]'>
      <div className='bg-white rounded-lg shadow-md p-6 flex'>
        {/* Image on the left */}
        <div className='bg-product-bg w-1/2 flex justify-center' style={{ height: '700px' }}>
          <img
            src={productDetail.data.image}
            className=' h-full w-auto '
            style={{ mixBlendMode: 'multiply' }}
            alt={productDetail.data.title}
          />
        </div>

        {/* Product details on the right */}
        <div className='w-1/2 pl-6'>
          <h2 className='text-2xl font-semibold mb-4'>{productDetail.data.title}</h2>

          <p className='text-gray-600'>{productDetail.data.description}</p>
          <p className='mt-4 text-gray-800 font-semibold'>${productDetail.data.price}</p>
          <br />

          {/* Buttons for actions */}
          <div className='mt-6 flex gap-3'>
            <button className='bg-blue-500 hover:bg-hover text-white px-4 py-2 rounded-md basis-2/3'>
              Add to Cart
            </button>
            <button className='bg-gray-300 hover:bg-hover text-gray-800 px-4 py-2 rounded-md basis-1/3'>
              Add to Wishlist
            </button>
          </div>

          <div className='mt-6 flex'>
            <Button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md grow'>Buy it now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
