import React, { FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { removeProductFromWishList } from '../../redux/wishList'
import CartIcon from '../../components/Icons/CartIcon'
import { addCart } from '../../redux/allCart'
import { Product } from '../../types/product.type'
import DeleteIcon from '../../components/Icons/DeleteIcon'

const WishList: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const wishList = useAppSelector((state) => state.wishList.list)
  // console.log(wishList)
  const handleDelete = (id: number) => {
    dispatch(removeProductFromWishList(id))
  }

  const handleAddTOCart = (item: Product) => {
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
                      <div className='flex items-center gap-6 py-5'>
                        <Link to={`/products/${item.category}/${item.id}`}>
                          <div className='relative h-[100px] w-[100px] p-3'>
                            <img
                              className='absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover py-2'
                              src={item.image}
                              alt={item.title}
                              style={{ mixBlendMode: 'multiply' }}
                            />
                          </div>
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
                      <Tooltip title='Add product to cart'>
                        <button
                          className=' inline-block hover:text-hover hover:underline'
                          onClick={() => handleAddTOCart(item)}
                        >
                          <CartIcon />
                        </button>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title='Delete product from wish list'>
                        <button
                          className=' inline-block hover:text-hover hover:underline'
                          onClick={() => {
                            handleDelete(item.id)
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </Tooltip>
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
            className='rounded bg-main px-7 py-4 text-white shadow-md duration-300 ease-in-out hover:bg-hover'
            onClick={() => navigate('/')}
          >
            Make a Wish
          </button>
        </div>
      )}
    </>
  )
}

export default memo(WishList)
