import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { allCard, increaseCart, reduceCart, removeCart, toggleCheckbox } from '../../redux/allCart'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useState } from 'react'

export default function CartPage() {
  const [ship, setShip] = useState<string>('2')
  const navigate = useNavigate()
  const allListCard = useAppSelector(allCard)
  const dispatch = useAppDispatch()
  // console.log(allListCard)
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

  return (
    <>
      {allListCard.length ? (
        <div className='mt-10 w-full text-sm lg:h-screen lg:text-base'>
          <h1 className='mb-3 text-center text-4xl font-bold'>Shopping Cart</h1>
          <div className='mx-auto flex h-5/6 flex-col gap-3 lg:w-11/12 lg:flex-row lg:gap-8'>
            <div className='mx-auto h-full w-11/12 overflow-auto lg:w-2/3'>
              {allListCard.map((item, index) => (
                <div
                  key={index}
                  className='lg:gap-18 mr-2 flex items-center justify-between rounded border-b-2 border-slate-200 py-5'
                  style={{ backgroundColor: item.checkbox ? '#ccc' : 'transparent' }}
                >
                  <input
                    type='checkbox'
                    className='cursor-pointer self-center p-5'
                    checked={item.checkbox}
                    onChange={() => dispatch(toggleCheckbox(item.id))}
                  />
                  <img src={item.image} alt='' className='h-36 w-36 object-contain' />
                  <div className='w-2/5 text-start'>
                    <h4 className='font-semibold'>{item.title}</h4>
                    <span className='flex gap-2'>
                      <p className='font-semibold'>Price:</p>
                      <p>${(Number(item.price) * 0.8).toFixed(2)}</p>
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
                        className='h-6 w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
                      </svg>
                    </button>
                    <span className='w-10 rounded border-2 border-main px-2 text-center'>{item.count}</span>
                    <button className='hover:text-hover' onClick={() => handleIncreaseProduct(item.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
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

            {allListCard.filter((item) => item.checkbox === true).length ? (
              <div className='fixed bottom-0 left-0 right-0 h-max rounded bg-slate-100 p-8 lg:static lg:w-1/3'>
                <h3 className='border-b-2 border-main pb-2 text-start text-2xl font-bold'>Order Summary</h3>

                {/* <table className='my-4 w-full table-auto'>
                  <thead className=''>
                    <th className='w-2/3 text-start'>Product's name</th>
                    <th className='w-1/6'>Quantity</th>
                    <th className='w-1/6'>Price</th>
                  </thead>
                  <tbody>
                    {allListCard
                      .filter((item) => item.checkbox === true)
                      .map((item, index) => (
                        <tr key={index} className='border-b-2 border-slate-300'>
                          <td className='w-2/3 text-start'>{item.title}</td>
                          <td className='w-1/6 text-center'>{item.count}</td>
                          <td className='w-1/6 text-center'>{(Number(item.price) * 0.8).toFixed(2)}</td>
                        </tr>
                      ))}
                    <tr>
                      <td className='w-2/3 text-start'>Order Total</td>
                      <td className='w-1/6'></td>
                      <td className='w-1/6 text-center'>
                        {allListCard
                          .filter((item) => item.checkbox === true)
                          .reduce((acc, cur) => acc + cur.count * Number(cur.price) * 0.8, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                <div className='my-3 flex justify-between'>
                  <span className='font-semibold uppercase'>
                    Items{' '}
                    {allListCard.filter((item) => item.checkbox === true).reduce((acc, cur) => acc + cur.count, 0)}
                  </span>
                  <span>
                    ${' '}
                    {allListCard
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

                <div className='my-3 flex flex-wrap lg:flex-col lg:gap-2'>
                  <span className='basis-full font-semibold uppercase'>promo code</span>
                  <input className='basis-2/3 p-2' type='text' placeholder='Enter your code' />
                  <button className='basis-1/3 rounded bg-main p-2 uppercase text-white hover:bg-hover lg:w-1/4'>
                    Apply
                  </button>
                </div>

                <div className='my-5'>
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
                    {Number(
                      allListCard
                        .filter((item) => item.checkbox === true)
                        .reduce((acc, cur) => acc + cur.count * Number(cur.price) * 0.8, 0)
                        .toFixed(2)
                    ) + Number(ship)}
                  </span>
                </div>

                <button
                  type='submit'
                  className='w-full rounded bg-main py-4 text-white shadow-md duration-200 ease-in-out hover:bg-hover '
                  onClick={() => {
                    toast.success('Order Success')
                  }}
                >
                  Order
                </button>
              </div>
            ) : (
              <div className='hidden md:block md:w-1/3'></div>
            )}
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
