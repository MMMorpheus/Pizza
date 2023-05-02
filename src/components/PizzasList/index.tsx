import { FC } from "react";
import {PizzaCard} from "../PizzaCard";
import { IPizza } from "../../redux/pizzas/types";
import { Skeleton } from "../../components";

import "./pizzaslist.scss";

interface IPizzasListProps {
  items: IPizza[];
  isFetching: boolean;
  filterValue: string;
}

export const PizzasList: FC<IPizzasListProps> = ({ items, isFetching, filterValue }) => {
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
          items
          .filter((item) =>
              item.title.toLowerCase().includes(filterValue)
            )
          .map((obj) => {
            return <PizzaCard key={obj.id} item={obj} />;
          })}
    </ul>
  );
};