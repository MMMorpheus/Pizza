import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { IPizza } from "../models/IPizza";
import { fetchPizzas } from "./ActionsCreator";

interface IPizzasState {
  pizzas: IPizza[];
  isLoading: boolean;
  error: string;
}

const initialState: IPizzasState = {
  pizzas: [],
  isLoading: false,
  error: "",
};

export const PizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizza[]>) => {
          state.isLoading = false;
          state.error = "";
          state.pizzas = action.payload;
        }
      )
      .addCase(fetchPizzas.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default PizzasSlice.reducer;
