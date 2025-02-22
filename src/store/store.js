// Imports to set up store.js to use Redux with project
import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";
import cartState from "./cartState";

// Configure store with reducers
export default configureStore({
  reducer: {
    user: userState,
    cart: cartState,
  },
});
