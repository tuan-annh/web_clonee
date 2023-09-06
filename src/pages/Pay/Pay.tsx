import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const items = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    count: 2,
    checkbox: true
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    count: 1,
    checkbox: false
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    count: 1,
    checkbox: true
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    count: 1,
    checkbox: true
  }
]

export default function BuyCard() {
  return (
    <div className='h-screen w-screen'>
      <h1 className='mx-auto mb-7 w-11/12 text-start text-4xl font-semibold'>Shopping Card</h1>
      <div className='mx-auto flex h-5/6 w-11/12 gap-10'>
        <div className='h-full w-2/3 overflow-auto'>
          {items.map((item, index) => (
            <div key={index} className='flex items-start gap-20 border-b-2 border-slate-200 py-5'>
              <input type='checkbox' className='self-center' />
              <img src={item.image} alt='' className='w-1/6' />
              <div className='w-2/5 text-start'>
                <h4 className='font-semibold'>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
              </div>
              <div className='h-max rounded border-2 border-slate-600'>
                <button className='px-2 '>-</button>
                <span className=''>{item.count}</span>
                <button className='px-2 '>+</button>
              </div>
              <button className='text-red-600'>Remove</button>
            </div>
          ))}
        </div>

        <div className='h-max w-1/3 rounded bg-slate-100 p-7'>
          <h3 className='text-start text-2xl font-bold'>Order summary</h3>
          <table className='my-4 table-auto'>
            <thead>
              <th className='w-2/3'>Name</th>
              <th className='w-1/6'>Count</th>
              <th className='w-1/6'>Price</th>
            </thead>
            <tbody>
              {items
                .filter((item) => item.checkbox === true)
                .map((item, index) => (
                  <tr key={index} className='border-b-2 border-slate-300'>
                    <td className='w-2/3 text-start'>{item.title}</td>
                    <td className='w-1/6'>{item.count}</td>
                    <td className='w-1/6'>{item.price}</td>
                  </tr>
                ))}
              <tr>
                <td className='w-2/3 text-start'>Order Total</td>
                <td className='w-1/6'></td>
                <td className='w-1/6'>
                  {items.filter((item) => item.checkbox === true).reduce((acc, cur) => acc + cur.count * cur.price, 0)}
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
