import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Stores/cartStore";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
/*
Store into Slices 
dispatch Actions => Reducer => State

*/
