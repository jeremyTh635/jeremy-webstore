import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";
import cartState from "./cartState";

export default configureStore({
  reducer: {
    user: userState,
    cart: cartState,
  },
});
