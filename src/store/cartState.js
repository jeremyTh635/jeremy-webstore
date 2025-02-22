// Import to create cart slice
import { createSlice } from "@reduxjs/toolkit";

// Declare initial state for cart
const initialState = {
  cart: [],
  totalPrice: 0,
  quantity: 0,
};

// Create slice with necessary reducers to update cart state
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // Add new items to cart
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Increase quantity of item if already in cart
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Add to cart with necessary properties
        state.cart.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          id: action.payload.id,
          quantity: 1,
        });
      }
      state.totalPrice += newItem.price;
    },

    // Delete item from cart
    removeFromCart(state, action) {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        findItem.quantity--;
      }
      state.totalPrice -= findItem.price;
    },

    // Add cost of shipping to individual cart item and to total price of items
    addShipping(state, action) {
      state.cart.forEach((item) => (item.price += action.payload));
      state.totalPrice = state.totalPrice + state.cart.length * action.payload;
    },
  },
});

// Make reducers available to all other components
export const { addToCart, removeFromCart, addShipping } = cartSlice.actions;
export default cartSlice.reducer;
