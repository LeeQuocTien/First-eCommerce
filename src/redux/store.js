import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import productReducers from "./product"

const reducer = combineReducers({
  product: productReducers
})

export default configureStore({
  reducer
})