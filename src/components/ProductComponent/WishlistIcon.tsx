import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Fade, Tooltip } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Product } from '../../types/product.type'
import { addProductToWishList, removeProductFromWishList } from '../../redux/wishList'

interface Props {
  onMouseOver: boolean
  product: Product
}

function WishlistIcon({ onMouseOver, product }: Props) {
  const dispatch = useAppDispatch()
  const wishList = useAppSelector((state) => state.wishList.list)
  const isWished = wishList.find((wishItem) => wishItem.id === product.id)

  return (
    <Tooltip
      title={<p className='text-sm tracking-wide'> {isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}</p>}
      placement='left'
      TransitionComponent={Fade}
      arrow
    >
      <button
        onClick={(event) => {
          event.preventDefault()
          if (isWished) {
            dispatch(removeProductFromWishList(product.id))
          } else {
            dispatch(addProductToWishList(product))
          }
        }}
        className={classNames(
          'ease-in-ou mt-2 flex w-full items-center justify-center rounded-md py-2 text-main-text opacity-0 duration-200',
          {
            'opacity-100': onMouseOver,
            'bg-white hover:bg-hover hover:text-product-bg': !isWished,
            'bg-hover text-product-bg': isWished
          }
        )}
      >
        <FavoriteBorderOutlined />
      </button>
    </Tooltip>
  )
}

export default WishlistIcon
