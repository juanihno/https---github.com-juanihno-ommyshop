import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload)
      item.quantity += 1
      state.total += item.price
    },
    decrementquantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload)
      if (item.quantity === 1) {
        const index = state.products.findIndex(
          (item) => item.id === action.payload
        )
        state.products.splice(index, 1)
        state.quantity -= 1
        state.total -= item.price
      } else {
        item.quantity -= 1
        state.total -= item.price
      }
    },
    eraseCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
  },
})

export const { addProduct, incrementQuantity, decrementquantity, eraseCart } =
  cartSlice.actions
export default cartSlice.reducer
