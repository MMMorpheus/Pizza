import { AppDispach } from "../store";
import { IPizza } from "../models/IPizza";
import { PizzasSlice } from "./PizzasSlice";

import axios from "axios";

export const fetchPizzas = () => async (dispatch: AppDispach) => {
  try {
    dispatch(PizzasSlice.actions.pizzasFetching())
    const pizzas = await axios.get<IPizza[]>(`/products`);
    dispatch(PizzasSlice.actions.pizzasFetchingSuccess(pizzas.data))
  } catch (e) {
    const result = (e as Error).message;
    dispatch(PizzasSlice.actions.pizzasFetchingError(result))
  }
};
