import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { Product } from '../types/product.type'

const initialState: { list: Product[] } = { list: [] }

export const wishListSlice = createSlice({
  name: 'wishList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductToWishList: (state, action: PayloadAction<Product>) => {
      const data = action.payload
      const check = state.list.some((item) => item.id === data.id)
      if (check) {
        toast.warning('The product is already in your wish list')
      } else {
        state.list.push(action.payload)
        toast.success('Add product to wish list successfully')
      }
    },
    removeProductFromWishList: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id != action.payload)
      // toast.info('Remove product out of wish list successfully')
    }
  }
})

export const { addProductToWishList, removeProductFromWishList } = wishListSlice.actions

export const wishListReducer = wishListSlice.reducer
