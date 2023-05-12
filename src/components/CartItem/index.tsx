import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { ICartPizza } from "../../redux/cart/types";

import "./cartItem.scss";

export interface ICartItem {
  pizza: ICartPizza;
}

export const CartItem: FC<ICartItem> = ({ pizza }) => {
  const { addOne, removeOne, removeFromCart } = useActions();
  const { imageUrl, title, type, size, amount, priceByAmount } = pizza;

  return (
    <li className="cartItem">
      <div className="description">
        <img src={imageUrl} />
        <div className="info">
          <p>{title}</p>
          <p>
            {type} тісто, {size} см.
          </p>
        </div>
      </div>
      <div className="controls">
        <div className="amount__section">
          <button
            disabled={amount === 1 ? true : false}
            className="btn btn-orange"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              removeOne(pizza);
            }}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="btn btn-orange"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              addOne(pizza);
            }}
          >
            +
          </button>
        </div>
        <div className="total__section">
          <p className="total">{priceByAmount} &#8372;</p>
          <button
            className="btn btn-grey"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              removeFromCart(pizza);
            }}
          >
            x
          </button>
        </div>
      </div>
    </li>
  );
};
