import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  loading: false,
  error: "",
};

export const getcartItems = createAsyncThunk(
  "cartItems/getcartItems",
  async (arg) => {
   try {
    const response = await JSON.parse(localStorage.getItem("products"));
    return response;
   } catch (error) {
    console.log(error);
   }
  }
);

const CartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      try {
        let products = JSON.parse(localStorage.getItem("products"));

      let temp = products.filter((item) => item.id !==action.payload);
      localStorage.setItem("products", JSON.stringify(temp));
      } catch (error) {
        console.log(error);
      }
    },
    updateQuantity:(state,action)=>{
      try {
        let products = JSON.parse(localStorage.getItem("products"));

      const{productId,quantity} =action.payload;
      for(let product of products){
        if(product.id ===productId){
          product.quantity = quantity;
        }
      }
      localStorage.setItem("products",JSON.stringify(products));

      } catch (error) {
        console.log(error);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcartItems.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getcartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      state.error = "";
    });
    builder.addCase(getcartItems.rejected, (state, action) => {
      state.loading = false;
      state.cartItems = [];
      if (action.error.message === "Request failed with status code 404") {
        state.error = "Character Not Found!";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export const {removeItem,updateQuantity} =CartSlice.actions;
export const cartItemReducer = CartSlice.reducer;
