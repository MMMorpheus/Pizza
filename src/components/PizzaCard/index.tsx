import { FC, useState } from "react";
import { DoughtType, IPizza } from "../../types/types";
import "./pizzacard.scss";

interface PizzaCardProps {
  item: IPizza;
}

const PizzaCard: FC<PizzaCardProps> = ({
  item: { imageUrl, title, price, types, sizes },
}) => {

    const [activeType, setActiveType] = useState(types[0]);
    const handleType = (index: number) : void => {
        setActiveType(index)
    }
    const [activeSize, setActiveSize] = useState(0);
    const handleSize = (index: number) : void => {
        setActiveSize(index)
    }
  return (
    <li className="card">
      <img src={imageUrl} />
      <p>{title}</p>
      <div className="options">
        <ul>
          {types.map((type) => {
            return <li key={type} className={activeType === type ? '_active' : ''} onClick={() => {
                handleType(type)
            }}>{DoughtType[type]}</li>;
          })}
        </ul>
        <ul>{sizes.map(size => {
            return <li key={size} className={activeSize === sizes.indexOf(size) ? '_active' : ''} onClick={() => {
                handleSize(sizes.indexOf(size))
            }}>{size} см.</li>
        })}</ul>
      </div>
      <div className="price">
        <p>
            від {price} &#8372;
        </p>
        <button>+ Додати</button>
      </div>
    </li>
  );
};

export default PizzaCard;
