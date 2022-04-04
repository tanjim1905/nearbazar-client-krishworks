import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import productSlice from "../slice/productSlice";

export const rootReducer = combineReducers({
    products: productSlice.reducer,
    cart: cartSlice.reducer,
})