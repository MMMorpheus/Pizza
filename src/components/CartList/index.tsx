import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

import { CartItem } from "../";

import "./cartList.scss";


const CartList: FC = () => {
  const { cartPizzas } = useAppSelector((state) => state.cartReducer);
  return (
    <ul>
      {cartPizzas.map((item) => {
        return <CartItem key={item.cartId} pizza={item}/>;
      })}
    </ul>
  );
};

export default CartList;
