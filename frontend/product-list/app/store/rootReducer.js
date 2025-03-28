import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productData";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
