import { FC } from "react";
import { useAppSelector, useActions } from "../../hooks";
import { Category } from "../../redux/options/types";
import { optionsSelector } from "../../redux/options/selectors";

import styles from "./categories.module.scss";
import clsx from 'clsx';


export const categories: Category[] = [
  { title: "Усі", option: 0 },
  { title: "М'ясні", option: 1 },
  { title: "Гриль", option: 2 },
  { title: "Гострі", option: 3 },
  { title: "Вегетаріанські", option: 4 },
  // { title: "Закриті", option: 5 },
];

export const Categories: FC = () => {
  const { category } = useAppSelector(optionsSelector);
  const { changeCategory } = useActions();

  return (
    <div className={styles.categories}>
      <ul className={styles['categories_list']}>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={clsx(styles['li-category'], category.option === item.option && styles._active) }
              onClick={(e: React.MouseEvent<HTMLLIElement>):void => {
                changeCategory(item);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};