import { configureStore } from '@reduxjs/toolkit';
import { cartItemReducer } from '../../components/Slices/CartSlice';
import { productReducer } from '../../components/Slices/ProductListSlice';

export const store = configureStore({
  reducer: {
   cartItems:cartItemReducer,
   products:productReducer,
  },
});