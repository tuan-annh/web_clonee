import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { allCard, increaseCard, reduceCard, removeCard, toggleCheckbox } from '../../redux/allCard'

export default function BuyCard() {
  const allListCard = useAppSelector(allCard)
  const dispatch = useAppDispatch()
  console.log(allListCard)
  const handleRemoveCard = (index: number) => {
    dispatch(removeCard(index))
  }

  const handleReduceProduct = (id: number | string, index: number, count: number) => {
    if (count === 1) dispatch(removeCard(index))
    dispatch(reduceCard(id))
  }
  const handleIncreaseProduct = (id: number | string) => {
    dispatch(increaseCard(id))
  }

  return (
    <div className='w-screen h-screen'>
      <h1 className='w-11/12 mx-auto text-start font-semibold text-4xl mb-7'>Shopping Card</h1>
      <div className='w-11/12 flex mx-auto h-5/6 gap-10'>
        <div className='w-2/3 h-full overflow-auto'>
          {allListCard.map((item, index) => (
            <div key={index} className='flex items-start gap-20 py-5 border-b-2 border-slate-200'>
              <input
                type='checkbox'
                className='self-center'
                checked={item.checkbox}
                onChange={() => dispatch(toggleCheckbox(item.id))}
              />
              <img src={item.image} alt='' className='w-1/6' />
              <div className='text-start w-2/5'>
                <h4 className='font-semibold'>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
              </div>
              <div className='h-max border-2 border-slate-600 rounded'>
                <button className='px-2' onClick={() => handleReduceProduct(item.id, index, item.count)}>
                  -
                </button>
                <span className=''>{item.count}</span>
                <button className='px-2' onClick={() => handleIncreaseProduct(item.id)}>
                  +
                </button>
              </div>
              <button className='text-red-600' onClick={() => handleRemoveCard(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className='w-1/3 h-max bg-slate-100 rounded p-7'>
          <h3 className='font-bold text-2xl text-start'>Order summary</h3>
          <table className='table-auto my-4 w-full'>
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
          <span className='pt-5'>
            or{' '}
            <Link to={''} className='text-blue-600'>
              Continue Shopping
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
