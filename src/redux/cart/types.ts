export interface ICartPizza {
  cartId: string;
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  amount: number;
  priceByAmount: number;
}
export interface ICurrentPizza {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
}

export interface ICartState {
  totalAmount: number;
  totalPrice: number;
  cartPizzas: ICartPizza[];
}
