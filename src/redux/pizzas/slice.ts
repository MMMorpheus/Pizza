import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzasState, IPizza } from "./types";
import { fetchPizzas } from "./actionsCreator";

const initialState: IPizzasState = {
  pizzas: [],
  isLoading: false,
  error: "",
};

const PizzasSlice = createSlice({
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