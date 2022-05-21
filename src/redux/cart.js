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
      },
      removeCartItems(state, action){
        state.cartItems.splice(action.payload.id - 1, 1)
      }
    }
})

const {addToCart, setCartItems, removeCartItems} = cart.actions;

export const postCartItems = ({product}) => async (dispatch) => {
  const res = await axios.post("http://localhost:9081/cartItems", {product});
  dispatch(addToCart(res.data))
}

export const fetchCartItems = () => async (dispatch) => {
  const res = await axios.get("http://localhost:9081/cartItems");
  dispatch(setCartItems(res.data))
}

export const deletePost = ({item}) => async (dispatch) => {
  const res = await axios.delete(`http://localhost:9081/cartItems/${item.id}`);
  dispatch(removeCartItems(res.data))
}

export default cart.reducer;

