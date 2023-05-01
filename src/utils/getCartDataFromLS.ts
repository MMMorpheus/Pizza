import { ICartPizza } from "../redux/cart/types";

export const getCartDataFromLS = () => {
  const json = window.localStorage.getItem("cart");
  const items: ICartPizza[] = json ? JSON.parse(json) : [];
  const price = items.reduce<number>((acum: number, curr) => {
    return acum + curr.priceByAmount;
  }, 0);
  const count = items.reduce<number>((acum: number, curr) => {
    return acum + curr.amount;
  }, 0);

  return { items, price, count };
};
