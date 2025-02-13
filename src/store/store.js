import { configureStore } from "@reduxjs/toolkit";
import shopState from "./shopState";

const store = configureStore({
  reducer: {
    shop: shopState,
  },
});

export default store;
