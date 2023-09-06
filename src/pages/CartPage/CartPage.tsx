import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { allCard, increaseCart, reduceCart, removeCart, toggleCheckbox } from '../../redux/allCart'

export default function CartPage() {
  const allListCard = useAppSelector(allCard)
  const dispatch = useAppDispatch()
  console.log(allListCard)
  const handleRemoveCart = (index: number) => {
    dispatch(removeCart(index))
  }

  const handleReduceProduct = (id: number | string, index: number, count: number) => {
    if (count === 1) dispatch(removeCart(index))
    dispatch(reduceCart(id))
  }
  const handleIncreaseProduct = (id: number | string) => {
    dispatch(increaseCart(id))
  }

  return (
    <div className='h-screen w-screen'>
      <h1 className='mx-auto mb-7 w-11/12 text-start text-4xl font-semibold'>Shopping Cart</h1>
      <div className='mx-auto flex h-5/6 w-11/12 gap-10'>
        <div className='h-full w-2/3 overflow-auto'>
          {allListCard.map((item, index) => (
            <div key={index} className='flex items-start gap-20 border-b-2 border-slate-200 py-5'>
              <input
                type='checkbox'
                className='self-center'
                checked={item.checkbox}
                onChange={() => dispatch(toggleCheckbox(item.id))}
              />
              <img src={item.image} alt='' className='w-1/6' />
              <div className='w-2/5 text-start'>
                <h4 className='font-semibold'>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
              </div>
              <div className='h-max rounded border-2 border-slate-600'>
                <button className='px-2' onClick={() => handleReduceProduct(item.id, index, item.count)}>
                  -
                </button>
                <span className=''>{item.count}</span>
                <button className='px-2' onClick={() => handleIncreaseProduct(item.id)}>
                  +
                </button>
              </div>
              <button className='text-red-600' onClick={() => handleRemoveCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className='h-max w-1/3 rounded bg-slate-100 p-7'>
          <h3 className='text-start text-2xl font-bold'>Order summary</h3>
          <table className='my-4 w-full table-auto'>
            <thead className=''>
              <th className='w-2/3'>Name</th>
              <th className='w-1/6'>Count</th>
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
          <Button variant='contained' className='w-full'>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
