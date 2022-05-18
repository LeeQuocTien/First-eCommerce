import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: []
}

const cart = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action){
        state.cartItems = action.payload
      }
    }
})

const {addToCart} = cart.actions;

export const postCartItems = ({product}) => async (dispatch) => {
  const res = axios.post("http://localhost:9081/cartItems", {product});
  dispatch(addToCart(res.data))
}

export default cart.reducer;

