import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pizzasReduser from "./slices/PizzasSlice";

const rootReducer = combineReducers({
  pizzasReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispach = typeof store.dispatch;
