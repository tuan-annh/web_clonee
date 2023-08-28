import classNames from 'classnames'
import { ProductViewType } from '../../pages/ProductsList/ProductsList'
import { Product } from '../../types/product.type'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <>
      {type === 'grid' && (
        <Link
          to={String(product.id)}
          className='m-1 overflow-hidden p-3 cursor-pointer'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className='w-full relative pt-[100%] bg-product-bg'>
            <img
              src={product.image}
              className='absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75 hover:scale-[.85] hover:scale ease-out duration-700'
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className='top-5 absolute left-5 '>
              <span className='bg-hover text-product-bg py-1 px-2 rounded text-sm'>-20%</span>
            </div>
            <div className={classNames('opacity-0 ease-in-out duration-200', { 'opacity-100': onMouseOver })}>
              <button
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
      {type == 'list' && (
        <div
          className='mx-1 mb-6 p-3 grid grid-cols-4'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Link to={path.products} className='overflow-hidden col-span-1 pr-3'>
            <div className='w-full relative pt-[100%] bg-product-bg'>
              <img
                src={product.image}
                className='absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75 hover:scale-[.85] hover:scale ease-out duration-700'
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className='top-5 absolute left-5 '>
                <span className='bg-hover text-product-bg py-1 px-2 rounded text-sm'>-20%</span>
              </div>
              <div className={classNames('opacity-0 ease-in-out duration-200', { 'opacity-100': onMouseOver })}>
                <button
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
                to={path.products}
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
