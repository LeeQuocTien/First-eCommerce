import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: []
};

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setProducts(state, action){
        state.products = action.payload;
      }
    }
})

const {setProducts} = product.actions;

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:9081/products");
  dispatch(setProducts(res.data))
}

export default product.reducer;