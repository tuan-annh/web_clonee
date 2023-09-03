import classNames from 'classnames'
import { Product } from '../../types/product.type'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductViewType, productViewList } from '../../constants/productListConst.enum'
import path from '../../constants/path'

interface ProductComponentInteface {
  product: Product
  type: ProductViewType //type ở đây là kiểu component cho grid hay list
}

// CHÚ Ý: Chỉ có mỗi trang ProductList dùng đến kiểu list thôi nên các phần khác mn auto cho nó kiểu Grid (Như trang home hay chi tiết sp)

function ProductComponent({ product, type }: ProductComponentInteface) {
  const [onMouseOver, setOnMouveOver] = useState(false)

  const onMouseOverHandler = () => {
    setOnMouveOver(true)
  }

  const onMouseLeaveHandler = () => {
    setOnMouveOver(false)
  }

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
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
            <div
              className={classNames('top-5 absolute right-5', {
                'opacity-100': onMouseOver,
                'opacity-70': !onMouseOver
              })}
            >
              <span className='bg-white text-main-text py-1 px-2 rounded text-sm'>
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
              </span>
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
          className='mx-1 mb-6 p-3 grid grid-cols-4'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Link to={`${path.products}/${product.category}/${product.id}`} className='overflow-hidden col-span-1 pr-3'>
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
              <div
                className={classNames('top-5 absolute right-5', {
                  'opacity-100': onMouseOver,
                  'opacity-70': !onMouseOver
                })}
              >
                <span className='bg-white text-main-text py-1 px-2 rounded text-sm'>
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
                </span>
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
          <div className='col-span-3 flex items-center pl-5 pr-3'>
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
