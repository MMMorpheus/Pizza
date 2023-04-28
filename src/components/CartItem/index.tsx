import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { ICartPizza } from "../../redux/models/ICartPizza";

import "./cartItem.scss";

export interface ICartItem {
  pizza: ICartPizza;
}

const CartItem: FC<ICartItem> = ({ pizza }) => {
  const { addOne, removeOne, removeFromCart } = useActions();
  const {
    imageUrl,
    title,
    type,
    size,
    amount,
    priceByAmount,
  } = pizza;

  return (
    <li className="cartItem">
      <img src={imageUrl} />
      <div className="info">
        <p>{title}</p>
        <p>
          {type} тісто, {size} см.
        </p>
      </div>
      <div className="space-beteween">
        <div className="amount">
          <button
            className="btn"
            onClick={() => {
              removeOne(pizza);
            }}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="btn"
            onClick={() => {
              addOne(pizza);
            }}
          >
            +
          </button>
        </div>
        <p className="total">{priceByAmount} &#8372;</p>
        <button
          className="btn btn-grey"
          onClick={() => {
            removeFromCart(pizza);
          }}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
