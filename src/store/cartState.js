import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push(newItem);
      }
      // state.totalPrice += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.cart = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalPrice -= existingItem.price;
    },
  },
});

export const { AddItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
