import { configureStore } from '@reduxjs/toolkit';
import { cartItemReducer } from '../Slices/CartSlice';
import { productReducer } from '../Slices/ProductListSlice';

export const store = configureStore({
  reducer: {
   cartItems:cartItemReducer,
   products:productReducer,
  },
});