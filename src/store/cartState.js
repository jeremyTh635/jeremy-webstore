import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.cart.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.cart.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          id: action.payload.id,
          quantity: 1,
        })
      }
      state.totalPrice += newItem.price;

    },

    removeFromCart(state, action) {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        findItem.quantity--;
      }
      state.totalPrice -= findItem.price;
    },
    addShipping(state, action) {
        state.cart.forEach((item) => item.price += action.payload )
        state.totalPrice = state.totalPrice + state.cart.length * action.payload;
    },
  },
});

export const { addToCart, removeFromCart, addShipping } = cartSlice.actions;
export default cartSlice.reducer;
