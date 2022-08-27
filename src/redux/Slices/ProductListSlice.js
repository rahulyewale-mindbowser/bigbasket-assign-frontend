import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_API } from "../../utils/services";
import axios from 'axios'

const initialState ={
    productlist:[],
    loading:false,
    error:"",
}


export const getproducts = createAsyncThunk(
  "products/getproducts",
  async (arg) => {
    try {
      const category =localStorage.getItem('category')
    let response ='';
    category!=="all"? response = await axios.get(`${PRODUCTS_API}/category?category=${category}`):
   response = await axios.get(`${PRODUCTS_API}/all`);
    return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


 const ProductListSlice =
  createSlice({
    name: 'productlist',
    initialState,
    reducers:{
        setmyBasket:(state,action)=>{
          try {
            const items = localStorage.getItem("products");
          if(items){
            state.mybasket=(JSON.parse(items).length);
          }
          } catch (error) {
            console.log(error);
          }
          
        },
    },
    extraReducers:(builder) => {
      builder.addCase(getproducts.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      });
      builder.addCase(getproducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        if (action.error.message === "Request failed with status code 404") {
          state.error = "products Not Found!";
        } else {
          state.error = action.error.message;
        }
      });
    },
    
  })
  export const {setCategory,setmyBasket} = ProductListSlice.actions;
  export const productReducer = ProductListSlice.reducer