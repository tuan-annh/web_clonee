import classNames from 'classnames'
import { Product } from '../../types/product.type'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductViewType, productViewList } from '../../constants/productListConst.enum'
import path from '../../constants/path'
import { useAppDispatch } from '../../redux/hooks'
import { addCart } from '../../redux/allCart'
import WishlistIcon from './WishlistIcon'

interface ProductComponentInterface {
  product: Product
  type: ProductViewType
  //type ở đây là kiểu component cho grid hay list
}

// CHÚ Ý: Chỉ có mỗi trang ProductList dùng đến kiểu list thôi nên các phần khác mn auto cho nó kiểu Grid (Như trang home hay chi tiết sp)

function ProductComponent({ product, type }: ProductComponentInterface) {
  // const { setCartData, cartData } = useContext(AppContext)
  const [onMouseOver, setOnMouseOver] = useState(false)
  const dispatch = useAppDispatch()

  const onMouseOverHandler = () => {
    setOnMouseOver(true)
  }

  const onMouseLeaveHandler = () => {
    setOnMouseOver(false)
  }

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault() // Ngăn chặn nổi bọt gây ra việc tự nhảy vào chi tiết sản phẩm khi ấn add product to cart
    dispatch(
      addCart({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image,
        count: 1,
        checkbox: false
      })
    )
  }

  return (
    <>
      {type === productViewList.grid && (
        <Link
          to={`${path.products}/${product.category}/${product.id}`}
          className='m-1 cursor-pointer overflow-hidden p-3'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className='relative w-full bg-product-bg pt-[100%]'>
            <img
              src={product.image}
              className={classNames(
                'absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 scale-75 object-cover duration-700 ease-out',
                {
                  'scale-[.8]': onMouseOver
                }
              )}
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className='absolute left-5 top-5'>
              <span className='rounded bg-hover px-2 py-1 text-sm text-product-bg'>-20%</span>
            </div>
            <div className={'absolute right-5 top-5'}>
              <div
                className={classNames('rounded bg-white px-2 py-1 text-sm text-main-text', {
                  'opacity-100': onMouseOver,
                  'opacity-70': !onMouseOver
                })}
              >
                <div className='inline-flex items-center gap-1'>
                  {product.rating.rate}{' '}
                  <div className='inline-block text-yellow-500'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <WishlistIcon onMouseOver={onMouseOver} product={product} />
            </div>
            <div className={classNames('opacity-0 duration-200 ease-in-out', { 'opacity-100': onMouseOver })}>
              <button
                onClick={handleAddToCart}
                className={classNames(
                  'absolute bottom-5 left-5 right-5 rounded bg-white px-4 py-3 text-sm font-bold uppercase text-main duration-500 ease-in-out hover:bg-hover hover:text-white'
                )}
              >
                + add to cart
              </button>
            </div>
          </div>
          <div className='px-4 text-center'>
            <p className='mb-2 mt-3 line-clamp-1 font-semibold text-name-product duration-300 ease-in-out hover:text-hover'>
              {product.title}
            </p>
            <div>
              <span className='mr-2 font-bold text-current-product'>${(product.price * 0.8).toFixed(2)}</span>
              <span className='text-name-product line-through'>${product.price}</span>
            </div>
          </div>
        </Link>
      )}
      {type == productViewList.list && (
        <div
          className='mx-1 mb-6 grid grid-cols-12 gap-5 p-3'
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Link
            to={`${path.products}/${product.category}/${product.id}`}
            className='col-span-12 overflow-hidden pr-3 sm:col-span-4 xl:col-span-3'
          >
            <div className='relative w-full bg-product-bg pt-[100%]'>
              <img
                src={product.image}
                className={classNames(
                  'absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 scale-75 object-cover duration-700 ease-out',
                  {
                    'scale-[.8]': onMouseOver
                  }
                )}
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className='absolute left-5 top-5 '>
                <span className='rounded bg-hover px-2 py-1 text-sm text-product-bg'>-20%</span>
              </div>
              <div className={'absolute right-5 top-5'}>
                <div
                  className={classNames('rounded bg-white px-2 py-1 text-sm text-main-text', {
                    'opacity-100': onMouseOver,
                    'opacity-70': !onMouseOver
                  })}
                >
                  <div className='inline-flex items-center gap-1'>
                    {product.rating.rate}{' '}
                    <div className='inline-block text-yellow-500'>
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
                  </div>
                </div>
                <WishlistIcon onMouseOver={onMouseOver} product={product} />
              </div>
              <div className={classNames('opacity-0 duration-200 ease-in-out', { 'opacity-100': onMouseOver })}>
                <button
                  onClick={handleAddToCart}
                  className={classNames(
                    'absolute bottom-5 left-5 right-5 rounded bg-white px-4 py-3 text-sm font-bold uppercase text-main duration-500 ease-in-out hover:bg-hover hover:text-white'
                  )}
                >
                  + add to cart
                </button>
              </div>
            </div>
          </Link>
          <div className='col-span-12 flex items-center pr-3 text-center sm:col-span-8 sm:text-left xl:col-span-9'>
            <div>
              <Link
                to={`${product.category}/${product.id}`}
                className='mb-2 block text-xl font-semibold text-name-product duration-300 ease-in-out hover:text-hover'
              >
                {product.title}
              </Link>
              <div className='mb-5 text-lg'>
                <span className='mr-2 font-bold text-current-product'>${(product.price * 0.8).toFixed(2)}</span>
                <span className='text-name-product line-through'>${product.price}</span>
              </div>
              <p className='line-clamp-2 text-main-text'>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductComponent
