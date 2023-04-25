import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { ICategory } from "../../types/types";
import "./categories.scss";

export interface ICategories {}

const categories: ICategory[] = [
  { title: "Усі", option: 0 },
  { title: "М'ясні", option: 1 },
  { title: "Гриль", option: 2 },
  { title: "Гострі", option: 3 },
  { title: "Вегетаріанські", option: 4 },
  { title: "Закриті", option: 5 },
];

const Categories: FC<ICategories> = ({}) => {
  const { category } = useAppSelector((state) => state.optionsReducer);
  const { changeCategory } = useActions();

  return (
    <div>
      <ul className="categories">
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={category.option === item.option ? "active" : ""}
              onClick={() => {
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

export default Categories;
