// ProductDetail.tsx
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../apis/productApi.api'
import { Button } from '@mui/base/Button'
import { useState } from 'react'

function ProductDetail() {
  // Define a state variable to keep track of the quantity
  const [quantity, setQuantity] = useState(1)

  // Function to handle quantity increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const { id } = useParams<{ id: string }>()

  const { data: productDetail } = useQuery(['productDetail', id], () => {
    if (id) return productApi.getProductDetail(id)
  })

  // Fetch similar products
  const { data: similarProducts } = useQuery(['similarProducts', productDetail?.data?.category], () => {
    return productDetail ? productApi.getProductsByCategory(productDetail.data.category) : null
  })

  if (!productDetail) {
    return <div>Loading...</div>
  }

  // Calculate the discount amount
  const originalPrice = productDetail.data.price
  const discountedPrice = (originalPrice * 0.8).toFixed(2)
  const discountPercentage = 20 // Assuming a fixed 20% discount
  // Render the product details
  // Filter and limit the similar products to 3 items
  const limitedSimilarProducts = similarProducts?.data?.slice(0, 4)

  return (
    <div className='w-full mx-auto p-6 px-[60px]'>
      <div className='bg-white rounded-lg shadow-md p-6 flex'>
        {/* Image on the left */}
        <div className='bg-product-bg w-1/2 flex justify-center' style={{ height: '700px' }}>
          <img
            src={productDetail.data.image}
            className=' h-full w-auto  '
            style={{ mixBlendMode: 'multiply' }}
            alt={productDetail.data.title}
          />
        </div>

        {/* Product details on the right */}
        <div className='w-1/2 pl-6'>
          <h2 className='text-2xl font-semibold mb-4'>{productDetail.data.title}</h2>

          <div className='text-lg mt-5'>
            {/* Display the discount message */}
            <span className='text-current-product font-bold mr-2'>${discountedPrice}</span>
            <span className='mt-4 text-name-product line-through font-semibold'>
              ${originalPrice} ({discountPercentage}%)
            </span>
          </div>
          <div className='text-lg mt-5'>
            <p className='text-gray-600'>{productDetail.data.description}</p>
          </div>
          <br />

          {/* Quantity control section */}
          <div className='flex items-center justify-between'>
            <div className='text-lg'>Quantity:</div>
            <div className='flex items-center'>
              <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md'
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className='mx-2'>{quantity}</div>
              <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md'
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <hr className='border-b border-gray-300 my-4' />
          {/* Buttons for actions */}
          <div className='mt-6 flex gap-3'>
            <button className='bg-blue-500 hover:bg-hover text-white px-4 py-2 rounded-md basis-2/3'>
              Add to Cart
            </button>
            <button className='bg-gray-300 hover:bg-hover text-gray-800 px-4 py-2 rounded-md basis-1/3'>
              Add to Wishlist
            </button>
          </div>
          <hr className='border-b border-gray-300 my-4' />
          <div className='mt-6 flex'>
            <Button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md grow'>Buy it now</Button>
          </div>

          <div>
            <p className='text-gray-600'>Category: {productDetail.data.category}</p>
          </div>
          {/* Display similar products */}
          <div className='mt-6'>
            <h3 className='text-xl font-semibold mb-3'>Similar Products</h3>
            <div className='flex flex-wrap'>
              {Array.isArray(limitedSimilarProducts) && limitedSimilarProducts.length > 0 ? (
                limitedSimilarProducts.map((product) => (
                  <div key={product.id} className='w-1/4 p-4'>
                    <div className='bg-white rounded-lg shadow-md p-3 h-full'>
                      <div className='aspect-w-1 aspect-h-1'>
                        <img src={product.image} alt={product.title} className='object-cover w-full h-full' />
                      </div>
                      <h4 className='text-lg font-semibold mt-2'>{product.title}</h4>
                      <p className='text-gray-600'>${product.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No similar products found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
