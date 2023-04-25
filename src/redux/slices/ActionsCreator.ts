import { IPizza } from "../models/IPizza";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory, IOption } from "../../types/types";

interface IQueryParams {
  category: ICategory,
  sortOption: IOption,
  currentPage: number,
  order: string
}

export const fetchPizzas = createAsyncThunk(
  "pizzas/getAll",
  async (param:IQueryParams, thunkAPI) => {
    const {category, sortOption, currentPage, order} = param;
    try {
      const response = await axios.get<IPizza[]>(`/products?_page=${currentPage}&limit_4&category_like=${category.option === 0 ? '' : category.option}&_sort=${sortOption.query}&_order_${order}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      const errorMsg = (e as Error);
      return thunkAPI.rejectWithValue(errorMsg.message);
    }
  }
);


//<ICategory, IOption, number, string>