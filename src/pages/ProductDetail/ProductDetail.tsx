// ProductDetail.tsx
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../apis/productApi.api'
import { Button } from '@mui/base/Button'
import { useState } from 'react'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { useAppDispatch } from '../../redux/hooks' // Import the Redux dispatch function
import { addCart } from '../../redux/allCart'

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

  const dispatch = useAppDispatch()
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
  const limitedSimilarProducts = similarProducts?.data?.slice(0, 5)

  const handleAddToCart = () => {
    // Create an object representing the product to be added to the cart
    const productToAdd = {
      id: productDetail.data.id,
      title: productDetail.data.title,
      price: productDetail.data.price,
      category: productDetail.data.category,
      image: productDetail.data.image,
      count: quantity, // Use the selected quantity
      checkbox: false
    }

    // Dispatch the addCart action to add the product to the cart
    dispatch(addCart(productToAdd))

    // Optional: You can show a success message or trigger some other action here
  }
  return (
    <div className='mx-auto w-full p-6 px-[60px]'>
      <div>
        <section className='body-font overflow-hidden bg-white text-gray-700'>
          <div className='container mx-auto px-5 py-12 sm:py-24 md:py-32 lg:py-48 xl:py-52'>
            <div className='mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2    '>
              <div className='relative w-full bg-product-bg '>
                <img
                  style={{ mixBlendMode: 'multiply' }}
                  alt={productDetail.data.title}
                  className='absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 scale-75 object-cover duration-700 ease-out sm:w-full md:w-full lg:w-full xl:w-full'
                  src={productDetail.data.image}
                />
              </div>

              <div className='mt-6 w-full  lg:pl-10'>
                <h2 className='title-font text-sm tracking-widest text-gray-500'>BRAND NAME</h2>
                <h1 className='text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                  {productDetail.data.title}
                </h1>

                <div className='mb-2 flex'>
                  <span className='flex items-center'>
                    <svg
                      fill='currentColor'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-red-500'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                    </svg>
                    {/* Add more rating stars here */}
                    <span className='ml-3 text-gray-600'>4 Reviews</span>
                  </span>
                  <span className='ml-3 flex border-l-2 border-gray-200 py-2 pl-3'>
                    <a className='text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    {/* Add more icons for actions here */}
                  </span>
                </div>
                <div className='mb-2  text-lg'>
                  {/* Display the discount message */}
                  <span className='mr-2 font-bold text-current-product'>${discountedPrice}</span>
                  <span className='mt-4 font-semibold text-name-product line-through '>
                    ${originalPrice} ({discountPercentage}%)
                  </span>
                </div>

                <p className='leading-relaxed'>{productDetail.data.description}</p>
                <div className='mb-5 mt-6 flex items-center border-b-2 border-gray-200 pb-5'>
                  <div className='flex'>
                    <span className='mr-3'>Color</span>
                    <button className='h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none'></button>

                    {/* Add more color buttons here */}
                  </div>
                </div>

                <div className=' border-gray-200pb-5 mb-5 mt-6 flex items-center justify-between  border-b-2'>
                  <div className='text-lg'>Quantity</div>
                  <div className='flex items-center'>
                    <button
                      className='rounded-md bg-gray-300 px-2 py-1 text-gray-800 hover:bg-hover sm:px-3'
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <div className='mx-2'>{quantity}</div>
                    <button
                      className='rounded-md bg-gray-300 px-2 py-1 text-gray-800 hover:bg-hover sm:px-3'
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons for actions */}
                <div className='mt-6 flex gap-3'>
                  <button
                    onClick={handleAddToCart}
                    className='w-full basis-2/3 rounded border border-main bg-main py-3 text-product-bg duration-300 ease-in-out hover:bg-white hover:text-main'
                  >
                    Add to Cart
                  </button>
                  <button className='w-full basis-1/3 rounded border border-main bg-main py-3 text-product-bg duration-300 ease-in-out hover:bg-white hover:text-main'>
                    Add to Wishlist
                  </button>
                </div>

                <div className='mt-6 flex'>
                  <Button className='w-full grow rounded border border-main bg-main py-3 text-product-bg duration-300 ease-in-out  hover:bg-hover hover:text-main'>
                    Buy it now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='body-font overflow-hidden bg-white text-gray-700'>
          <div className='container mx-auto flex flex-col items-center justify-center px-5 pb-24'>
            <h2 className='border-gray-200pb-5 title-font  mt-6  pb-5  text-center text-3xl font-medium text-gray-900'>
              Description
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto voluptas! Repellat, beatae? Dolore
              inventore nisi ut accusamus ea natus quia ratione facilis velit sunt. Iure labore illo, architecto autem
              temporibus doloribus officia eius debitis quas, sed nam unde ipsam in amet aliquam ducimus laboriosam
              velit repellat quod beatae repudiandae.
            </p>
          </div>
        </section>

        <section className='body-font overflow-hidden bg-white text-gray-700'>
          {/* Display similar products */}
          <div className='mt-6'>
            <h2 className='border-gray-200pb-5 title-font  mt-6  pb-5  text-center text-3xl font-medium text-gray-900'>
              Similar Products
            </h2>
            <div className='py-7" mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array.isArray(limitedSimilarProducts) && limitedSimilarProducts.length > 0 ? (
                limitedSimilarProducts.map((product) => (
                  <ProductComponent
                    key={product.id}
                    product={product}
                    type='grid'
                    similarProducts={limitedSimilarProducts} // Pass similarProducts as a prop
                  />
                ))
              ) : (
                <div>No similar products found.</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
