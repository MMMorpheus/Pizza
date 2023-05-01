import { FC } from "react";
import { ICartPizza } from "../../redux/cart/types";
import { CartItem } from "../CartItem";

import "./cartList.scss";

interface ICartPizzasProps {
  items: ICartPizza[]
}

export const CartList: FC<ICartPizzasProps> = ({items}) => {
  return (
    <ul>
      {items.map((item) => {
        return <CartItem key={item.cartId} pizza={item}/>;
      })}
    </ul>
  );
};