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

export enum DoughtType {
  тонке,
  традиційне,
}

export interface IFilterOption {
  title: string,
  option: number
}