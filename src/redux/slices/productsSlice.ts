import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface FetchState {
  isLoading: boolean
  data: []
  isError: boolean
  hasFetched: boolean
}

const initialState: FetchState = {
  isLoading: false,
  data: [],
  isError: false,
  hasFetched: false
}

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  return response.json()
})

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.hasFetched = true
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.log("Error: ", action.payload)
    })
  },
})

export default productsSlice.reducer
