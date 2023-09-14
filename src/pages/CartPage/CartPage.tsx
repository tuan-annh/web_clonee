import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { allCart, increaseCart, paymentCart, reduceCart, removeCart, toggleCheckbox } from '../../redux/allCart'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useContext, useState } from 'react'
import { userApi } from '../../apis/user.api'
import { AppContext } from '../../contexts/HighApp.context'
import { getTodayDate } from '../../utils/utils'
import { CartProduct } from '../../types/user.type'

export default function CartPage() {
  const [ship, setShip] = useState<string>('2')
  const navigate = useNavigate()
  const allListCart = useAppSelector(allCart)
  const { userData } = useContext(AppContext)
  const dispatch = useAppDispatch()

  // console.log(allListCart)

  const handleRemoveCart = (index: number) => {
    if (window.confirm('Do you want to remove this product from your shopping cart?') === true)
      dispatch(removeCart(index))
  }

  const handleReduceProduct = (id: number | string, index: number, count: number) => {
    if (count === 1) {
      if (window.confirm('Do you want to remove this product from your shopping cart?') === true) {
        dispatch(removeCart(index))
      } else {
        return
      }
    }
    dispatch(reduceCart(id))
  }
  const handleIncreaseProduct = (id: number | string) => {
    dispatch(increaseCart(id))
  }

  const checkOut = async () => {
    const isCheckout = allListCart.find((item) => item.checkbox)

    if (!isCheckout) {
      toast.info('Please select your items')
    }

    if (isCheckout && userData) {
      try {
        await userApi.addUserCart({
          date: getTodayDate(),
          userId: userData.data.id,
          products: allListCart.map((item) => {
            if (item.checkbox) {
              return {
                productId: Number(item.id),
                quantity: item.count
              }
            }
            return [] as unknown as CartProduct
          })
        })
        toast.success('Order Success')
        dispatch(paymentCart())
      } catch (error) {
        return
      }
    }
  }

  return (
    <>
      {allListCart.length ? (
        <div className='mt-10 w-full text-sm lg:h-screen lg:text-base'>
          <h1 className='mb-3 text-center text-2xl font-bold md:text-4xl'>Shopping Cart</h1>
          <div className='mx-auto flex h-5/6 flex-col gap-3 lg:w-11/12 lg:flex-row lg:gap-8'>
            <div className='mx-auto h-full w-11/12 overflow-auto lg:w-2/3'>
              {allListCart.map((item, index) => (
                <div
                  key={index}
                  className='lg:gap-18 mr-2 flex items-center justify-between rounded border-b-2 border-slate-200 py-5'
                >
                  <div
                    className='flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-main text-white lg:h-6 lg:w-6'
                    onClick={() => dispatch(toggleCheckbox(item.id))}
                    style={{ backgroundColor: item.checkbox ? '#c7ab62' : 'transparent' }}
                  >
                    <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                    </svg>
                  </div>

                  <img src={item.image} alt='' className='h-28 w-28 object-contain md:h-32 md:w-32 lg:h-36 lg:w-36' />
                  <div className='w-2/5 text-start text-sm md:text-base'>
                    <h4 className='font-semibold'>{item.title}</h4>
                    <span className='flex flex-col md:flex-row md:gap-2'>
                      <span className='flex gap-2'>
                        <p className='font-semibold'>Price:</p>
                        <p>${(Number(item.price) * 0.8).toFixed(2)}</p>
                      </span>
                      <p className='line-through opacity-60'>${item.price} (20%)</p>
                    </span>
                    <span className='flex gap-2 capitalize'>
                      <p className='font-semibold'>Category:</p>
                      <p>{item.category}</p>
                    </span>
                  </div>
                  <div className='flex gap-1'>
                    <button
                      className='hover:text-hover'
                      onClick={() => handleReduceProduct(item.id, index, item.count)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4 md:h-6 md:w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
                      </svg>
                    </button>
                    <span className='w-7 rounded border-2 border-slate-300 text-center text-sm md:w-10 md:px-2 md:text-base'>
                      {item.count}
                    </span>
                    <button className='hover:text-hover' onClick={() => handleIncreaseProduct(item.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4 md:h-6 md:w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                    </button>
                  </div>
                  <button
                    className='hidden hover:text-hover hover:underline lg:block'
                    onClick={() => handleRemoveCart(index)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                  <button
                    className='block uppercase hover:text-hover lg:hidden'
                    onClick={() => handleRemoveCart(index)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className='fixed bottom-0 left-0 right-0 h-max bg-hover/20 px-4 py-2 lg:static lg:w-1/3 lg:rounded lg:px-8 lg:pb-14 lg:pt-8'>
              <h3 className='border-b-2 border-main pb-2 text-start text-2xl font-bold'>Order Summary</h3>

              <div className='flex justify-between md:my-3'>
                <span className='font-semibold uppercase'>
                  Items {allListCart.filter((item) => item.checkbox === true).reduce((acc, cur) => acc + cur.count, 0)}
                </span>
                <span>
                  ${' '}
                  {allListCart
                    .filter((item) => item.checkbox === true)
                    .reduce((acc, cur) => acc + cur.count * Number(cur.price) * 0.8, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className='flex items-center justify-between lg:flex-col lg:items-start lg:gap-2'>
                <span className='font-semibold uppercase'>Shipping</span>
                <select
                  name=''
                  id=''
                  value={ship}
                  onChange={(e) => setShip(e.target.value)}
                  className='cursor-pointer p-2 focus:border-main lg:w-full'
                >
                  <option value='2'>Economy delivery $2</option>
                  <option value='5'>Urgent delivery $5</option>
                </select>
              </div>

              <div className='flex flex-wrap lg:my-3 lg:flex-col lg:gap-2'>
                <span className='basis-full font-semibold uppercase'>promo code</span>
                <input className='basis-2/3 p-2' type='text' placeholder='Enter your code' />
                <button className='basis-1/3 rounded bg-main p-2 uppercase text-white hover:bg-hover lg:w-1/4'>
                  Apply
                </button>
              </div>

              <div className='md:my-3 lg:my-5'>
                <p className='font-semibold'>Select a payment method</p>
                <div>
                  <input type='radio' id='1' name='pay' />
                  <label htmlFor='1' className='ml-2 cursor-pointer'>
                    Payment upon delivery (COD)
                  </label>
                </div>
                <div>
                  <input type='radio' id='2' name='pay' />
                  <label htmlFor='2' className='ml-2 cursor-pointer'>
                    Payment by transfer via QR Code
                  </label>
                </div>
                <div>
                  <input type='radio' id='3' name='pay' />
                  <label htmlFor='3' className='ml-2 cursor-pointer'>
                    Pay by ATM/NAPAS card
                  </label>
                </div>
              </div>

              <div className='flex justify-between border-t-2 border-main py-2'>
                <span className='font-semibold uppercase'>total cost</span>
                <span>
                  ${' '}
                  {allListCart.filter((item) => item.checkbox === true).length
                    ? Number(
                        allListCart
                          .filter((item) => item.checkbox === true)
                          .reduce((acc, cur) => acc + cur.count * Number(cur.price) * 0.8, 0)
                          .toFixed(2)
                      ) + Number(ship)
                    : 0}
                </span>
              </div>

              <button
                type='submit'
                className='w-full rounded bg-main py-4 text-white shadow-md duration-200 ease-in-out hover:bg-hover '
                onClick={checkOut}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='my-28 flex flex-col items-center'>
          <img
            src='https://kangarooshopping.vn/static/version1689569306/frontend/Kangaroo/base/vi_VN/images/cart-empty.png'
            alt=''
            className='max-w-max'
          />
          <span className='mb-5 text-xl font-semibold opacity-60'>Your shopping cart is empty</span>
          <button
            type='submit'
            className='rounded bg-main px-7 py-4 text-white shadow-md duration-200 ease-in-out hover:bg-hover'
            onClick={() => navigate('/')}
          >
            Go Shopping
          </button>
        </div>
      )}
    </>
  )
}
