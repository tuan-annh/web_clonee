// ProductDetail.tsx
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../apis/productApi.api'

import { useEffect, useState } from 'react'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { useAppDispatch } from '../../redux/hooks' // Import the Redux dispatch function
import { addCart } from '../../redux/allCart'
import { capitalizeFirstLetter } from '../../utils/utils'
import { CircularProgress } from '@mui/material'
import Subscribe from '../../components/Subscribe/Subscribe'
import ProductDetailTab from './ProcuctDetailTab'
import { addProductToWishList } from '../../redux/wishList'

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
  const { data: similarProducts, isFetching } = useQuery(['similarProducts', productDetail?.data?.category], () => {
    return productDetail ? productApi.getProducts(productDetail.data.category) : null
  })

  // Calculate the discount amount
  const originalPrice = productDetail && productDetail.data.price
  const discountedPrice = originalPrice && (originalPrice * 0.8).toFixed(2)
  const discountPercentage = 20 // Assuming a fixed 20% discount
  // Render the product details
  // Filter and limit the similar products to 3 items
  const limitedSimilarProducts = similarProducts?.data?.slice(0, 4)

  const handleAddToCart = () => {
    // Create an object representing the product to be added to the cart
    const productToAdd = productDetail && {
      id: productDetail.data.id,
      title: productDetail.data.title,
      price: productDetail.data.price,
      category: productDetail.data.category,
      image: productDetail.data.image,
      count: quantity, // Use the selected quantity
      checkbox: false
    }

    // Dispatch the addCart action to add the product to the cart
    if (productToAdd) dispatch(addCart(productToAdd))

    // Navigate to the cart page ("/paycart")

    // Optional: You can show a success message or trigger some other action here
  }
  const handleBuyToCart = () => {
    const productToAdd = productDetail && {
      id: productDetail.data.id,
      title: productDetail.data.title,
      price: productDetail.data.price,
      category: productDetail.data.category,
      image: productDetail.data.image,
      count: quantity, // Use the selected quantity
      checkbox: true
    }

    // Dispatch the addCart action to add the product to the cart
    if (productToAdd) dispatch(addCart(productToAdd))

    // Navigate to the cart page ("/paycart")

    // Optional: You can show a success message or trigger some other action here
  }
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to the top
  }, [id])

  return (
    <div className='min-h-screen'>
      {isFetching ? (
        <div className='relative h-screen text-center'>
          <CircularProgress style={{ color: '#c7ab62' }} className='absolute top-20' />
        </div>
      ) : (
        productDetail && (
          <div className='mx-auto w-full'>
            <div>
              <section className='body-font bg-white text-gray-700'>
                <div className='mx-auto max-w-6xl px-5 py-7 sm:py-10 md:py-14 lg:py-16'>
                  <div className='mx-auto md:flex   '>
                    <div className='md:w-1/2'>
                      <div className='relative w-full rounded bg-product-bg pt-[100%]'>
                        <img
                          style={{ mixBlendMode: 'multiply' }}
                          alt={productDetail.data.title}
                          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50'
                          src={productDetail.data.image}
                        />
                      </div>
                    </div>
                    <div className=' md:w-1/2 md:pl-10'>
                      <h2 className='title-font my-2 text-sm tracking-widest text-gray-500'>
                        {/* Create a link to the home page */}
                        <Link className=' hover:text-main' to='/'>
                          Home
                        </Link>{' '}
                        / {/* Create a link to the category page */}
                        <Link className=' hover:text-main' to={`/products/${productDetail.data.category}`}>
                          {capitalizeFirstLetter(productDetail.data.category)}
                        </Link>
                      </h2>
                      <h1 className='mb-4 text-2xl font-medium text-gray-900 sm:text-3xl md:text-4xl  '>
                        {productDetail.data.title}
                      </h1>

                      <div className='mb-2 flex'>
                        <span className='flex items-center'>
                          {productDetail.data.rating.rate}
                          <div className='inline-block pl-2 text-yellow-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              fill='currentColor'
                              className='h-4 w-4'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
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
                          <button className='mr-2 h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none'></button>
                          <button className='mr-2 h-6 w-6 rounded-full border-2 border-red-300 bg-red-600 focus:outline-none'></button>
                          <button className='h-6 w-6 rounded-full border-2 border-yellow-300 bg-yellow-500 focus:outline-none'></button>

                          {/* Add more color buttons here */}
                        </div>
                      </div>

                      <div className=' border-gray-200pb-5 mb-5 mt-6 flex items-center justify-between  border-b-2 pb-4'>
                        <div className='text-lg'>Quantity</div>
                        <div className='flex items-center'>
                          <button
                            className='w-8 rounded-md bg-gray-300 px-2 py-1 text-gray-800 hover:bg-hover sm:px-3'
                            onClick={decreaseQuantity}
                          >
                            -
                          </button>
                          <div className='mx-2'>{quantity}</div>
                          <button
                            className='w-8 rounded-md bg-gray-300 px-2 py-1 text-gray-800 hover:bg-hover sm:px-3'
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
                          className='w-full rounded border border-main bg-main py-3 font-semibold text-product-bg duration-300 ease-in-out hover:bg-white hover:text-main sm:w-2/3 md:w-1/2'
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => dispatch(addProductToWishList(productDetail.data))}
                          className='w-full rounded border border-main py-3  font-semibold text-main duration-300 ease-in-out hover:bg-white hover:text-hover sm:w-1/3 md:w-1/2'
                        >
                          Add to Wishlist
                        </button>
                      </div>

                      <div className='mt-6 flex'>
                        <Link
                          to={{
                            pathname: '/paycart'
                          }}
                          onClick={handleBuyToCart}
                          className='w-full grow rounded border-main bg-main py-3 text-center font-semibold  text-white duration-300 ease-in-out hover:bg-hover '
                        >
                          <button className='uppercase'>Buy it now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='body-font overflow-hidden bg-white text-gray-700'>
                <div className='container mx-auto flex max-w-5xl flex-col items-center justify-center px-5 pb-8  '>
                  <ProductDetailTab />
                </div>
              </section>

              <section className='body-font overflow-hidden bg-white text-gray-700'>
                {/* Display similar products */}
                <div className='my-6'>
                  <h2 className='border-gray-200pb-5 title-font  mt-6  pb-5  text-center text-3xl  font-semibold text-gray-900'>
                    Similar Products
                  </h2>

                  <div className='py-7" mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                    {Array.isArray(limitedSimilarProducts) && limitedSimilarProducts.length > 0 ? (
                      limitedSimilarProducts.map((product) => (
                        <ProductComponent
                          key={product.id}
                          product={product}
                          type='grid'
                          // Pass similarProducts as a prop
                        />
                      ))
                    ) : (
                      <div>No similar products found.</div>
                    )}
                  </div>
                </div>
              </section>
              <Subscribe />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ProductDetail
