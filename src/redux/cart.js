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
        state.cartItems.push(action.payload)
      },
      setCartItems(state, action){
        state.cartItems = action.payload
      }
    }
})

const {addToCart, setCartItems} = cart.actions;

export const postCartItems = ({product}) => async (dispatch) => {
  const res = await axios.post("http://localhost:9081/cartItems", {product});
  dispatch(addToCart(res.data))
}

export const fetchCartItems = () => async (dispatch) => {
  const res = await axios.get("http://localhost:9081/cartItems");
  dispatch(setCartItems(res.data))
}

export default cart.reducer;

