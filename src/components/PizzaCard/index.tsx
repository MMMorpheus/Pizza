import { FC, useState } from "react";
import { DoughtType } from "../../types/types";
import { IPizza } from "../../redux/pizzas/types";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/redux";
import { cartSelector } from "../../redux/cart/selectors";

import "./pizzacard.scss";


interface IPizzaCardProps {
  item: IPizza;
}

export const PizzaCard: FC<IPizzaCardProps> = ({
  item: { id, imageUrl, title, price, types, sizes },
}) => {
  const { addToCart } = useActions();
  const { cartPizzas } = useAppSelector(cartSelector);

  const amount = cartPizzas
    .filter((i) => i.title === title)
    .reduce<number>((acum: number, curr) => {
      return acum + curr.amount;
    }, 0);

  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(0);
  
  return (
    <li className="card">
      <img src={imageUrl} />
      <p>{title}</p>
      <div className="options">
        <ul>
          {types.map((type) => {
            return (
              <li
                key={type}
                className={activeType === type ? "_active" : ""}
                onClick={(e: React.MouseEvent<HTMLLIElement>): void => {
                  setActiveType(type);
                }}
              >
                {DoughtType[type]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, i) => {
            return (
              <li
                key={size}
                className={activeSize === i ? "_active" : ""}
                onClick={(e: React.MouseEvent<HTMLLIElement>): void => {
                  setActiveSize(i);
                }}
              >
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price">
        <p>від {price} &#8372;</p>
        <button
          onClick={(): void => {
            addToCart({
              id,
              imageUrl,
              title,
              type: DoughtType[activeType],
              size: sizes[activeSize],
              price,
            });
          }}
        >
          + Додати
          {amount > 0 && <span>{amount}</span>}
        </button>
      </div>
    </li>
  );
};
