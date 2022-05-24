import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import productReducers from "./product"
import cartReducers from "./cart"
import UserReducers from "./user"

const reducer = combineReducers({
  product: productReducers,
  cart: cartReducers,
  user: UserReducers
})

export default configureStore({
  reducer
})