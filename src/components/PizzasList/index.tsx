import { FC } from "react";
import PizzaCard from "../PizzaCard";
import { Skeleton } from "../../components";
import { IPizza } from "../../redux/models/IPizza";
import "./pizzaslist.scss";

interface IPizzasList {
  items: IPizza[];
  isFetching: boolean;
}

const PizzasList: FC<IPizzasList> = ({ items, isFetching }) => {
  return (
    <ul className="list">
      {isFetching
        ? [...Array(4)].map((_, i) => {
            return (
              <li key={i}>
                <Skeleton />
              </li>
            );
          })
        : items &&
          items.map((obj) => {
            return <PizzaCard key={obj.id} item={obj} />;
          })}
    </ul>
  );
};

export default PizzasList;
