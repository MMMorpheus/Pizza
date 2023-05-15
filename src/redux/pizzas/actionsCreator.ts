import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPizza } from "./types";

import axios from "axios";
// JSON server
// axios.defaults.baseURL = "http://localhost:3000";

// export const fetchPizzas = createAsyncThunk(
//   "pizzas/getAll",
//   async (param:IQueryParams, thunkAPI) => {
//     const {category, sortOption, currentPage, order, searchValue} = param;
//     try {
//       const response = await axios.get<IPizza[]>(`/products?_page=${currentPage}&_limit=10&title_like=${searchValue}&category_like=${category.option === 0 ? '' : category.option}&_sort=${sortOption.query}&_order=${order}`);
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (e) {
//       const errorMsg = (e as Error);
//       return thunkAPI.rejectWithValue(errorMsg.message);
//     }
//   }
// );

// Mock API
axios.defaults.baseURL = "https://644fd621ba9f39c6ab6db602.mockapi.io";

export const fetchPizzas = createAsyncThunk(
  "pizzas/getAll",
  async (search: string, thunkAPI) => {
    try {
      const response = await axios.get<IPizza[]>(`/products${search}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      const errorMsg = e as Error;
      return thunkAPI.rejectWithValue(errorMsg.message);
    }
  }
);
