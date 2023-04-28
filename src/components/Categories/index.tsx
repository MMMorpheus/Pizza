import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Category } from "../../types/types";
import "./categories.scss";

const categories: Category[] = [
  { title: "Усі", option: 0 },
  { title: "М'ясні", option: 1 },
  { title: "Гриль", option: 2 },
  { title: "Гострі", option: 3 },
  { title: "Вегетаріанські", option: 4 },
  { title: "Закриті", option: 5 },
];

const Categories: FC = () => {
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
