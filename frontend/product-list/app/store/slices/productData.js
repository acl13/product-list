import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import Product from "../../../../../models/product";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("http://localhost:8000/products");
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      (state.isLoading = false), (state.error = true);
    });
  },
});

export default productsSlice.reducer;
