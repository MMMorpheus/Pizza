import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOptionsState {
  category: number;
  sortOption: string;
  currentPage: number;
  order: string;
}

const initialState: IOptionsState = {
  category: 0,
  sortOption: "rating",
  currentPage: 1,
  order: "asc",
};

const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<number>) {
        state.category = action.payload;

    }
  },
});


export const {actions, reducer} = OptionsSlice