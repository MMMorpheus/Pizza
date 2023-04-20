import { FC, useState } from "react";
import "./sort.scss";

interface ISort {}
const sort: string[] = ["рейтингом", "ціною", "алфавітом"];

const Sort: FC<ISort> = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="sort_options">
      <div>
        Сортування за:
        <span
          className="active_option"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {sort[currentOption]}
        </span>
      </div>
      {isOpened && (
        <ul className="popup">
          {sort.map((opt, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setCurrentOption(i);
                  setIsOpened(false);
                }}
              >
                {opt}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
