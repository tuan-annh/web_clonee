import React, { FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import DeleteIcon from '../../components/Icons/DeleteIcon'
import { removeProductFromWishList } from '../../redux/wishList'
import CartIcon from '../../components/Icons/CartIcon'
import { addCart } from '../../redux/allCart'
import { Product } from '../../types/product.type'

const WishList: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const wishList = useAppSelector((state) => state.wishList.list)
  console.log(wishList)
  const handleDelete = (id: number) => {
    dispatch(removeProductFromWishList(id))
  }

  const handleAddCart = (item: Product) => {
    // console.log(item)
    const productToAdd = item && {
      id: item.id,
      title: item.title,
      price: item.price,
      category: item.category,
      image: item.image,
      count: 1, // Use the selected quantity
      checkbox: false
    }

    // Dispatch the addCart action to add the product to the cart
    if (productToAdd) dispatch(addCart(productToAdd))
  }

  return (
    <>
      {wishList.length ? (
        <div className='container mx-auto mt-10 min-h-[100vh]'>
          <h1 className='mb-3 text-center text-2xl font-bold md:text-4xl'>Wish List</h1>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <p className='text-[18px] font-bold'>Product</p>
                  </TableCell>
                  <TableCell align='center'>
                    <p className='text-[18px] font-bold'>Price</p>
                  </TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {wishList.map((item) => (
                  <TableRow key={item.id} className='hover:bg-slate-50'>
                    <TableCell>
                      <div className='flex items-center gap-5'>
                        <Link to={`/products/${item.category}/${item.id}`}>
                          <img src={item.image} alt={item.title} width='100px' height='100px' />
                        </Link>
                        <Link to={`/products/${item.category}/${item.id}`} className='text-[16px] font-bold'>
                          {item.title}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell align='center'>
                      <p className='text-[20px] font-bold'>${item.price}</p>
                    </TableCell>
                    <TableCell>
                      <button
                        className=' inline-block hover:text-hover hover:underline'
                        onClick={() => handleAddCart(item)}
                      >
                        <CartIcon />
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        className=' inline-block hover:text-hover hover:underline'
                        onClick={() => {
                          handleDelete(item.id)
                        }}
                      >
                        <DeleteIcon />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      ) : (
        <div className='my-28 flex flex-col items-center'>
          <img
            src='https://kangarooshopping.vn/static/version1689569306/frontend/Kangaroo/base/vi_VN/images/cart-empty.png'
            alt=''
            className='max-w-max'
          />
          <span className='mb-5 text-xl font-semibold opacity-60'>Your wish list is empty!</span>
          <button
            type='submit'
            className='rounded bg-main px-7 py-4 text-white shadow-md duration-200 ease-in-out hover:bg-hover'
            onClick={() => navigate('/')}
          >
            Make a Wish
          </button>
        </div>
      )}
      )
    </>
  )
}

export default memo(WishList)
