import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pizzasReduser from "./pizzas/slice";
import {reducer as optionsReducer} from "./options/slice";
import {reducer as cartReducer} from "./cart/slice";

const rootReducer = combineReducers({
  pizzasReduser, optionsReducer, cartReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispach = typeof store.dispatch;
