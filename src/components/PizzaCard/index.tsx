import {FC} from "react";
import { IPizza } from "../../types/types";
import "./pizzacard.scss";

interface PizzaCardProps {
    item: IPizza
}

const PizzaCard:FC<PizzaCardProps> = ({item: {imageUrl, title, price}}) => {
  return (
    <li className="card">
        <img src={imageUrl} />
        <p>{title}</p>
        <div className="options">
            <div>
                <div className="variant variant_available variant_active">
                    тонке
                </div>
                <div className="variant variant_available">
                    традиційне
                </div>
            </div>
            <div>
                <div className="variant variant_available variant_active">26 см.</div>
                <div className="variant variant_available">30 см.</div>
                <div className="variant">40 см.</div>
            </div>
        </div>
    </li>
  );
}

export default PizzaCard