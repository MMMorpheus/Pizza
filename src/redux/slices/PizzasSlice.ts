import { IPizza } from "../models/IPizza";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    pizzasFetching(state) {
      state.isLoading = true;
    },
    pizzasFetchingSuccess(state, action: PayloadAction<IPizza[]>) {
      state.isLoading = false;
      state.error = "";
      state.pizzas = action.payload
    },
    pizzasFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default PizzasSlice.reducer;
