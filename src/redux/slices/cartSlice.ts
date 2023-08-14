import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProductInterface {
  id: number
  title: string
  price: number
  image: string
  description: string
  category: string
  rating: object
}

interface CartInterface {
  cart: Array<ProductInterface>
}

const initialState: CartInterface = {
  cart: [],
}

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductInterface>): void => {
      state.cart.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>): void => {
      state.cart = state.cart.filter((each) => action.payload !== each.id)
    },
    clear: (state): void => {
      state.cart = []
    },
  },
})

export const { add, remove, clear } = productSlice.actions

export default productSlice.reducer
