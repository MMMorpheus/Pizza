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

export interface ICurrentPizza {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
}
