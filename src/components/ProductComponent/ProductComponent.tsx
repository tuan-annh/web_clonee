import classNames from 'classnames'
import { Product } from '../../types/product.type'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductViewType, productViewList } from '../../constants/productListConst.enum'
import path from '../../constants/path'
import { Fade, Tooltip } from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { AppContext } from '../../contexts/HighApp.context'

interface ProductComponentInteface {
  product: Product
  type: ProductViewType //type ở đây là kiểu component cho grid hay list
}

// CHÚ Ý: Chỉ có mỗi trang ProductList dùng đến kiểu list thôi nên các phần khác mn auto cho nó kiểu Grid (Như trang home hay chi tiết sp)

function ProductComponent({ product, type }: ProductComponentInteface) {
  const { setCartData, cartData } = useContext(AppContext)
  const [onMouseOver, setOnMouveOver] = useState(false)

  const onMouseOverHandler = () => {
    setOnMouveOver(true)
  }

  const onMouseLeaveHandler = () => {
    setOnMouveOver(false)
  }

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (cartData.products.some((productCart) => productCart.productId === product.id)) {
      setCartData((prev) => ({
        ...prev,
        products: [...prev.products].map((productCart) => {
          if (productCart.productId === product.id)
            return { ...productCart, quantity: productCart.quantity + 1, price: product.price, title: product.title }
          return productCart
        })
      }))
      return
    }
    setCartData((prev) => ({
      ...prev,
      products: [...prev.products, { productId: product.id, quantity: 1, title: product.title, price: product.price }]
    }))
  }

  return (
    <>
      {type === productViewList.grid && (
        <Link
          to={`${path.products}/${product.category}/${product.id}`}
          className='m-1 overflow-hidden p-3 cursor-pointer'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className='w-full relative pt-[100%] bg-product-bg'>
            <img
              src={product.image}
              className={classNames(
                'absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75 ease-out duration-700',
                {
                  'scale-[.8]': onMouseOver
                }
              )}
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className='top-5 absolute left-5'>
              <span className='bg-hover text-product-bg py-1 px-2 rounded text-sm'>-20%</span>
            </div>
            <div className={'top-5 absolute right-5'}>
              <div
                className={classNames('bg-white text-main-text py-1 px-2 rounded text-sm', {
                  'opacity-100': onMouseOver,
                  'opacity-70': !onMouseOver
                })}
              >
                <div className='inline-flex gap-1 items-center'>
                  {product.rating.rate}{' '}
                  <div className='inline-block text-yellow-500'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <Tooltip
                title={<p className='text-sm tracking-wide'>Add to Wishlist</p>}
                placement='left'
                TransitionComponent={Fade}
                arrow
              >
                <button
                  onClick={(event) => event.preventDefault()}
                  className={classNames(
                    'bg-white text-main-text w-full py-2 mt-2 rounded-md items-center justify-center flex opacity-0 ease-in-out duration-200 hover:bg-hover hover:text-product-bg',
                    {
                      'opacity-100': onMouseOver
                    }
                  )}
                >
                  <FavoriteBorderOutlined />
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg> */}
                </button>
              </Tooltip>
            </div>
            <div className={classNames('opacity-0 ease-in-out duration-200', { 'opacity-100': onMouseOver })}>
              <button
                onClick={handleAddToCart}
                className={classNames(
                  'absolute right-5 left-5 bottom-5 bg-white text-main uppercase text-sm font-bold px-4 py-3 hover:bg-hover hover:text-white rounded ease-in-out duration-500'
                )}
              >
                + add to cart
              </button>
            </div>
          </div>
          <div className='text-center px-4'>
            <p className='text-name-product font-semibold line-clamp-1 hover:text-hover ease-in-out duration-300 mb-2 mt-3'>
              {product.title}
            </p>
            <div>
              <span className='text-current-product font-bold mr-2'>${(product.price * 0.8).toFixed(2)}</span>
              <span className='text-name-product line-through'>${product.price}</span>
            </div>
          </div>
        </Link>
      )}
      {type == productViewList.list && (
        <div
          className='mx-1 mb-6 p-3 grid grid-cols-12 gap-5'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Link
            to={`${path.products}/${product.category}/${product.id}`}
            className='overflow-hidden col-span-12 sm:col-span-4 xl:col-span-3 pr-3'
          >
            <div className='w-full relative pt-[100%] bg-product-bg'>
              <img
                src={product.image}
                className={classNames(
                  'absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75 ease-out duration-700',
                  {
                    'scale-[.8]': onMouseOver
                  }
                )}
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className='top-5 absolute left-5 '>
                <span className='bg-hover text-product-bg py-1 px-2 rounded text-sm'>-20%</span>
              </div>
              <div className={'top-5 absolute right-5'}>
                <div
                  className={classNames('bg-white text-main-text py-1 px-2 rounded text-sm', {
                    'opacity-100': onMouseOver,
                    'opacity-70': !onMouseOver
                  })}
                >
                  <div className='inline-flex gap-1 items-center'>
                    {product.rating.rate}{' '}
                    <div className='inline-block text-yellow-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <Tooltip
                  title={<p className='text-sm tracking-wide'>Add to Wishlist</p>}
                  placement='left'
                  TransitionComponent={Fade}
                  arrow
                >
                  <button
                    onClick={(event) => event.preventDefault()}
                    className={classNames(
                      'bg-white text-main-text w-full py-2 mt-2 rounded-md items-center justify-center flex opacity-0 ease-in-out duration-200 hover:bg-hover hover:text-product-bg',
                      {
                        'opacity-100': onMouseOver
                      }
                    )}
                  >
                    <FavoriteBorderOutlined />
                  </button>
                </Tooltip>
              </div>
              <div className={classNames('opacity-0 ease-in-out duration-200', { 'opacity-100': onMouseOver })}>
                <button
                  onClick={handleAddToCart}
                  className={classNames(
                    'absolute right-5 left-5 bottom-5 bg-white text-main uppercase text-sm font-bold px-4 py-3 hover:bg-hover hover:text-white rounded ease-in-out duration-500'
                  )}
                >
                  + add to cart
                </button>
              </div>
            </div>
          </Link>
          <div className='col-span-12 sm:col-span-8 xl:col-span-9 text-center sm:text-left flex items-center pr-3'>
            <div>
              <Link
                to={`${product.category}/${product.id}`}
                className='text-name-product font-semibold text-xl hover:text-hover ease-in-out duration-300 mb-2 block'
              >
                {product.title}
              </Link>
              <div className='text-lg mb-5'>
                <span className='text-current-product font-bold mr-2'>${(product.price * 0.8).toFixed(2)}</span>
                <span className='text-name-product line-through'>${product.price}</span>
              </div>
              <p className='text-main-text line-clamp-2'>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductComponent
