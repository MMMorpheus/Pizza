import { FC, useState } from "react";
import { DoughtType } from "../../types/types";
import { IPizza } from "../../redux/models/IPizza";
import { useActions } from "../../hooks/useActions";

import "./pizzacard.scss";

interface IPizzaCardProps {
  item: IPizza;
}

const PizzaCard: FC<IPizzaCardProps> = ({
  item: { id, imageUrl, title, price, types, sizes },
}) => {
  const { addToCart } = useActions();

  const [activeType, setActiveType] = useState<number>(types[0]);
  const handleType = (index: number): void => {
    setActiveType(index);
  };
  const [activeSize, setActiveSize] = useState<number>(0);
  const handleSize = (index: number): void => {
    setActiveSize(index);
  };
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
                onClick={() => {
                  handleType(type);
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
                onClick={() => {
                  handleSize(i);
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
          onClick={() => {
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
        </button>
      </div>
    </li>
  );
};

export default PizzaCard;
