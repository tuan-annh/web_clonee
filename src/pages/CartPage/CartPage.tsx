import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { allCard, increaseCart, reduceCart, removeCart, toggleCheckbox } from '../../redux/allCart'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export default function CartPage() {
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
        <div className='mt-10 w-screen lg:h-screen'>
          <div className='mx-auto flex h-5/6 flex-col gap-3 lg:w-11/12 lg:flex-row lg:gap-10'>
            <div className='mx-auto h-full w-11/12 overflow-auto lg:w-2/3'>
              {allListCard.map((item, index) => (
                <div
                  key={index}
                  className='lg:gap-18 mr-2 flex items-start justify-between border-b-2 border-slate-200 py-5'
                >
                  <input
                    type='checkbox'
                    className='self-center p-5'
                    checked={item.checkbox}
                    onChange={() => dispatch(toggleCheckbox(item.id))}
                  />
                  <img src={item.image} alt='' className='w-1/6' />
                  <div className='w-2/5 text-start'>
                    <h4 className='font-semibold'>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Category: {item.category}</p>
                  </div>
                  <div className='h-max rounded border-2 border-slate-300 hover:border-slate-500'>
                    <button
                      className='border-r border-slate-300 px-2 '
                      onClick={() => handleReduceProduct(item.id, index, item.count)}
                    >
                      -
                    </button>
                    <span className='px-3'>{item.count}</span>
                    <button className='border-l border-slate-300 px-2' onClick={() => handleIncreaseProduct(item.id)}>
                      +
                    </button>
                  </div>
                  <button className='text-red-600' onClick={() => handleRemoveCart(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {allListCard.filter((item) => item.checkbox === true).length ? (
              <div className='fixed bottom-0 left-0 right-0 h-max rounded bg-slate-100 p-7 lg:static lg:w-1/3'>
                <h3 className='text-start text-2xl font-bold'>Order summary</h3>
                <table className='my-4 w-full table-auto'>
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
                          <td className='w-1/6 text-center'>{item.price}</td>
                        </tr>
                      ))}
                    <tr>
                      <td className='w-2/3 text-start'>Order Total</td>
                      <td className='w-1/6'></td>
                      <td className='w-1/6 text-center'>
                        {allListCard
                          .filter((item) => item.checkbox === true)
                          .reduce((acc, cur) => acc + cur.count * Number(cur.price), 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>

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

                <Button
                  variant='contained'
                  className='w-full'
                  onClick={() => {
                    toast.success('Order Success')
                  }}
                >
                  Order
                </Button>
              </div>
            ) : (
              <div className='hidden lg:block lg:w-1/3'></div>
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
          <Button variant='outlined' onClick={() => navigate('/')}>
            Go Shopping
          </Button>
        </div>
      )}
    </>
  )
}
