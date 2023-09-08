import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { toast } from 'react-toastify'

// Define a type for the slice state
interface Cart {
  id: string | number
  title: string
  price: string | number
  category: string
  image: string
  count: number
  checkbox: boolean
}

// Define the initial state using that type
const initialState: Array<Cart> = []

export const allPayCart = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Cart>) => {
      const existingProduct = state.find((product) => product.id === action.payload.id)
      if (existingProduct) {
        existingProduct.count += 1
      } else {
        state.push(action.payload)
      }
      toast.success('Add product to cart successfully')
    },
    toggleCheckbox: (state, action: PayloadAction<number | string>) => {
      const cart = state.find((item) => item.id === action.payload)
      if (cart) {
        cart.checkbox = !cart.checkbox
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    increaseCart: (state, action: PayloadAction<string | number>) => {
      const existingProduct = state.find((product) => product.id === action.payload)
      if (existingProduct) existingProduct.count += 1
    },
    reduceCart: (state, action: PayloadAction<string | number>) => {
      const existingProduct = state.find((product) => product.id === action.payload)
      if (existingProduct) existingProduct.count -= 1
    }
  }
})

export const { addCart, toggleCheckbox, removeCart, increaseCart, reduceCart } = allPayCart.actions

// Other code such as selectors can use the imported `RootState` type
export const allCard = (state: RootState) => state.allPayCart

export default allPayCart