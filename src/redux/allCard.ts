import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface Card {
  id: string | number
  title: string
  price: string | number
  category: string
  image: string
  count: number
  checkbox: boolean
}

// Define the initial state using that type
const initialState: Array<Card> = []

export const allPayCard = createSlice({
  name: 'card',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      const existingProduct = state.find((product) => product.id === action.payload.id)
      if (existingProduct) {
        existingProduct.count += 1
      } else {
        state.push(action.payload)
      }
    },
    toggleCheckbox: (state, action: PayloadAction<number | string>) => {
      const card = state.find((item) => item.id === action.payload)
      if (card) {
        card.checkbox = !card.checkbox
      }
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    increaseCard: (state, action: PayloadAction<string | number>) => {
      const existingProduct = state.find((product) => product.id === action.payload)
      if (existingProduct) existingProduct.count += 1
    },
    reduceCard: (state, action: PayloadAction<string | number>) => {
      const existingProduct = state.find((product) => product.id === action.payload)
      if (existingProduct) existingProduct.count -= 1
    }
  }
})

export const { addCard, toggleCheckbox, removeCard, increaseCard, reduceCard } = allPayCard.actions

// Other code such as selectors can use the imported `RootState` type
export const allCard = (state: RootState) => state.allPayCard

export default allPayCard
