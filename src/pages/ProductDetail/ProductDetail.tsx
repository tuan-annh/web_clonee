// ProductDetail.tsx
import { Link, useParams } from 'react-router-dom'
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
    <div className='mx-auto w-full p-6 px-[60px]'>
      <div className='flex rounded-lg bg-white p-6 shadow-md'>
        {/* Image on the left */}
        <div className='flex w-1/2 justify-center bg-product-bg' style={{ height: '700px' }}>
          <img
            src={productDetail.data.image}
            className=' h-full w-auto  '
            style={{ mixBlendMode: 'multiply' }}
            alt={productDetail.data.title}
          />
        </div>

        {/* Product details on the right */}
        <div className='w-1/2 pl-6'>
          <h2 className='mb-4 text-2xl font-semibold'>{productDetail.data.title}</h2>

          <div className='mt-5 text-lg'>
            {/* Display the discount message */}
            <span className='mr-2 font-bold text-current-product'>${discountedPrice}</span>
            <span className='mt-4 font-semibold text-name-product line-through '>
              ${originalPrice} ({discountPercentage}%)
            </span>
          </div>
          <div className='mt-5 text-lg'>
            <p className='text-gray-600'>{productDetail.data.description}</p>
          </div>
          <br />

          {/* Quantity control section */}
          <div className='flex items-center justify-between'>
            <div className='text-lg'>Quantity:</div>
            <div className='flex items-center'>
              <button
                className='rounded-md bg-gray-300 px-3 py-1 text-gray-800 hover:bg-gray-400'
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className='mx-2'>{quantity}</div>
              <button
                className='rounded-md bg-gray-300 px-3 py-1 text-gray-800 hover:bg-gray-400'
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <hr className='my-4 border-b border-gray-300' />
          {/* Buttons for actions */}
          <div className='mt-6 flex gap-3'>
            <button className='basis-2/3 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-hover'>
              Add to Cart
            </button>
            <button className='basis-1/3 rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-hover'>
              Add to Wishlist
            </button>
          </div>
          <hr className='my-4 border-b border-gray-300' />
          <div className='mt-6 flex'>
            <Button className='grow rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600'>Buy it now</Button>
          </div>

          {/* Display similar products */}
          <div className='mt-6'>
            <h3 className='mb-3 text-xl font-semibold'>Similar Products</h3>
            <div className='flex flex-wrap'>
              {Array.isArray(limitedSimilarProducts) && limitedSimilarProducts.length > 0 ? (
                limitedSimilarProducts.map((product) => (
                  <Link
                    to={`/products/${productDetail.data.category}/${product.id}`}
                    key={product.id}
                    className='w-1/4 p-4'
                  >
                    <div className='h-full rounded-lg bg-white p-3 shadow-md'>
                      <div className='aspect-w-1 aspect-h-1'>
                        <img src={product.image} alt={product.title} className='h-full w-full object-cover' />
                      </div>
                      <h4 className=' mt-2 font-semibold'>{product.title}</h4>
                      <div className='mt-5 text-lg'>
                        {/* Display the discount message */}
                        <span className='mr-2 font-bold text-current-product'>${discountedPrice}</span>
                        <span className='mt-4 block font-semibold text-name-product line-through'>
                          ${originalPrice}
                        </span>
                      </div>
                    </div>
                  </Link>
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
