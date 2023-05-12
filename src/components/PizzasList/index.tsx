import { FC } from "react";
import { Skeleton, PizzaCard } from "../../components";
import { IPizza } from "../../redux/pizzas/types";

import styles from "./pizzaslist.module.scss";

interface IPizzasListProps {
  items: IPizza[];
  isFetching: boolean;
  filterValue: string;
}

export const PizzasList: FC<IPizzasListProps> = ({ items, isFetching, filterValue }) => {


  return (
    <ul className={styles.list}>
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