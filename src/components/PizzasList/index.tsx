import { FC } from "react";
import PizzaCard from "../PizzaCard";
import "./pizzaslist.scss";
import { Skeleton } from "../../components";

import { IPizza } from "../../types/types";

interface IPizzasList {
  items: IPizza[];
  isFetching: boolean;
}

const PizzasList: FC<IPizzasList> = ({ items, isFetching }) => {
  return (
    <ul className="list">
      {isFetching
        ? [...Array(8)].map((_, i) => {
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
      {/* {items.map(obj => {
            return <PizzaCard key={obj.id} item={obj} />
        })} */}
    </ul>
  );
};

export default PizzasList;
