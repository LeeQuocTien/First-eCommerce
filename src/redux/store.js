import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import productReducers from "./product"
import cartReducers from "./cart"

const reducer = combineReducers({
  product: productReducers,
  cart: cartReducers

})

export default configureStore({
  reducer
})