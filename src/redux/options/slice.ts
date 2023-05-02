import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOptionsState, Category, Option } from "./types";

const initialState: IOptionsState = {
  category: { title: "Усі", option: 0 },
  sortOption: { title: "рейтингом", query: "rating" },
  currentPage: 1,
  order: "asc",
  searchValue: "",
  haveChanged: false
};

const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<Category>) {
      state.category = action.payload;
      if(!state.haveChanged) {
        state.haveChanged = true;
      }
    },
    changeOption(state, action: PayloadAction<Option>) {
      state.sortOption = action.payload;
      if(!state.haveChanged) {
        state.haveChanged = true;
      }
    },
    toggleOrder(state) {
      if(!state.haveChanged) {
        state.haveChanged = true;
      }
      if (state.order === "asc") {
        state.order = "desc";
      } else {
        state.order = "asc";
      }
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      if(!state.haveChanged) {
        state.haveChanged = true;
      }
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload.toLowerCase();
    },
    setDefaultOptions(state) {
      state.category = { title: "Усі", option: 0 };
      state.sortOption = { title: "рейтингом", query: "rating" };
      state.order = "asc";
      state.searchValue = "";
      state.currentPage = 1;
      state.haveChanged = false;
    },
    setFilters(state, action: PayloadAction<any>) {
      state.category = action.payload.category;
      state.sortOption = action.payload.sortOption;
      state.order = action.payload.order;
      // state.currentPage = 1;
      state.haveChanged = true;
    }
  },
});

export const { actions, reducer } = OptionsSlice;