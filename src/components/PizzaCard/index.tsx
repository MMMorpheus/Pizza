import { FC, useState } from "react";
import { DoughtType } from "../../types/types";
import { IPizza } from "../../redux/pizzas/types";
import { useActions, useAmount } from "../../hooks";

import styles from "./pizzacard.module.scss";
import clsx from "clsx";

interface IPizzaCardProps {
  item: IPizza;
}

export const PizzaCard: FC<IPizzaCardProps> = ({
  item: { id, imageUrl, title, price, types, sizes },
}) => {
  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(0);
  
  const { addToCart } = useActions();
  const amount = useAmount(title);
  
  return (
    <li className={styles.card}>
      <img src={imageUrl} />
      <p>{title}</p>
      <div className={styles.options}>
        <ul>
          {types.map((type) => {
            return (
              <li
                key={type}
                className={clsx(activeType === type && styles.active)}
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
                className={clsx(activeSize === i && styles.active)}
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
      <div className={styles.price}>
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
