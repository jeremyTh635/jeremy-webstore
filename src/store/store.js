import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";
import productsState from "./productsState";
import cartState from "./cartState";

export default configureStore({
  reducer: {
    user: userState,
    products: productsState,
    cart: cartState,
  },
});
