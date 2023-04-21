import { FC, useState } from "react";
import "./sort.scss";

interface ISort {
  items: string[],
  current: string,
  change: (i: number) => void

}


const Sort: FC<ISort> = ({items, current, change}) => {

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
          {current}
        </span>
      </div>
      {isOpened && (
        <ul className="popup">
          {items.map((opt, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  change(i);
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
