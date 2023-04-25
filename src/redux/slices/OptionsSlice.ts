import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategories } from "../../components/Categories";
import { ICategory, IOption } from "../../types/types";

interface IOptionsState {
  category: ICategory;
  sortOption: IOption;
  currentPage: number;
  order: string;
}

const initialState: IOptionsState = {
  category: { title: "Усі", option: 0 },
  sortOption: { title: "рейтингом", query: "rating" },
  currentPage: 1,
  order: "asc",
};

const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<ICategory>) {
      state.category = action.payload;
    },
    changeOption(state, action: PayloadAction<IOption>) {
      state.sortOption = action.payload;
    },
    toggleOrder(state) {
      if (state.order === "asc") {
        state.order = "desc";
      } else {
        state.order = "asc";
      }
    },
  },
});

export const { actions, reducer } = OptionsSlice;
