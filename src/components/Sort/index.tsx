import { FC, useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { Option } from "../../types/types";
import "./sort.scss";


const options: Option[] = [
  { title: "рейтингом", query: "rating" },
  { title: "ціною", query: "price" },
  { title: "алфавітом", query: "title" },
];

const Sort: FC = () => {
  const { sortOption } = useAppSelector((state) => state.optionsReducer);
  const { changeOption, toggleOrder } = useActions();

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const popUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (event: any): void => {
      const path = event.composedPath();
      if (!path.includes(popUpRef.current)) {
        setIsOpened(false);
      }
    };

    document.body.addEventListener("click", clickOutside);
    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div ref={popUpRef} className="sort_options">
      <div className={`triangle ${isOpened ? "triangle_active" : ""}`}></div>
      <div>
        Сортування за:
        <span
          className="active_option"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {sortOption.title}
        </span>
        <svg
          className="order"
          onClick={() => {
            toggleOrder();
          }}
          enableBackground="new 0 0 100 100"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 100 100"
        >
          <g>
            <rect fill="none" height="5.9" width="28.7" x="32.4" y="42.7" />
            <rect fill="none" height="5.9" width="28.7" x="32.4" y="51.2" />
            <rect fill="#010101" height="2.5" width="28.7" x="32.4" y="48.6" />
            <rect fill="#010101" height="2.5" width="28.7" x="32.4" y="40.2" />
            <rect fill="#010101" height="2.5" width="28.7" x="32.4" y="57.1" />
            <g>
              <polygon points="24.4,26 24.2,26.2 15.1,35.3 16.1,36.3 16.2,36.4 16.4,36.6 16.6,36.8 23.5,29.8 23.5,60.9 24.9,60.9 25.1,60.9     25.3,60.9 25.6,60.9 25.6,29.8 32.5,36.8 33,36.3 33.5,35.8 33.6,35.7 33.8,35.5 34,35.3 24.6,25.9   " />
              <polygon points="75.4,64.6 75.3,64.5 74.8,64.1 74.5,63.7 74.4,63.6 67.4,70.5 67.4,39.4 66.9,39.4 66.7,39.4 65.6,39.4     65.3,39.4 65.3,70.5 58.4,63.6 58,63.9 57.9,64.1 56.9,65 66,74.1 66.2,74.3 66.4,74.5 66.6,74.3 75.8,65   " />
            </g>
          </g>
        </svg>
      </div>
      {isOpened && (
        <ul className="popup">
          {options.map((opt, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  changeOption(opt);
                  setIsOpened(false);
                }}
              >
                {opt.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
