import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("http://localhost:7000/products")
        console.log(response.data);
        return response?.data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: null
    },
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    }
})

export default productSlice;