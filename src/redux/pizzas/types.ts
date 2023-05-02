import { Category, Option } from "../options/types";

export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
}

export interface IPizzasState {
  pizzas: IPizza[];
  isLoading: boolean;
  error: string;
}

export interface IQueryParams {
  category: Category;
  sortOption: Option;
  currentPage?: number;
  order?: string;
  searchValue?: string;
}

