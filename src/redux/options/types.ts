export type Category = {
  title: string;
  option: number;
};

export type Option = {
  title: string;
  query: string;
};

export interface IOptionsState {
  category: Category;
  sortOption: Option;
  currentPage: number;
  order: string;
  searchValue: string;
  haveChanged: boolean;
}
