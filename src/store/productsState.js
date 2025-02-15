import { createSlice } from "@reduxjs/toolkit";
import photos from "../components/photos";

const initialState = {
  products: photos,
  loading: false,
}

const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
  },
});

export const { setProducts, setLoading} = productsSlice.actions;
export default productsSlice.reducer;
