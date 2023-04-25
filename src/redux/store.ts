import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pizzasReduser from "./slices/PizzasSlice";
import {reducer as optionsReducer} from "./slices/OptionsSlice";

const rootReducer = combineReducers({
  pizzasReduser, optionsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispach = typeof store.dispatch;
