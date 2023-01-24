import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./error";
import cartSlice from './cart'

const store = configureStore({
  reducer: {
    errorValues: errorSlice,
    cartValues:cartSlice,
  },
});

export default store;
