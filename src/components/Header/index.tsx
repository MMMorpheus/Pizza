import { FC, useRef, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { optionsSelector } from "../../redux/options/selectors";
import { cartSelector } from "../../redux/cart/selectors";
import { useActions } from "../../hooks/useActions";
import { Link, useLocation } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import "./header.scss";


export const Header: FC = () => {
  const { setSearchValue } = useActions();
  const { searchValue } = useAppSelector(optionsSelector);
  const {  cartPizzas, totalAmount, totalPrice } = useAppSelector(cartSelector);

  const location = useLocation();
  const isMounted = useRef<boolean>(false);
  useEffect(() => {
    if(isMounted.current) {
      const json = JSON.stringify(cartPizzas)
      window.localStorage.setItem('cart', json)
    }
    isMounted.current = true;
  }, [cartPizzas]);

  return (
    <header className="header">
      <Link to="/" className="storeInfo">
        <img
          src="/logo.svg"
          alt="Logo"
          className={location.pathname === "/cart" ? "rotation" : ""}
        />
        <div>
          <h2>React Pizza</h2>
          <p>Найсмачніша піцца у цілому Всесвіті</p>
        </div>
      </Link>
      {location.pathname !== "/cart" && (
        <>
          <label>
            <svg className="searchIcon" fill="currentColor" viewBox="0 0 32 32">
              <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
            </svg>
            <DebounceInput
              type="text"
              placeholder="Пошук за назвою..."
              value={searchValue}
              debounceTimeout={500}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setSearchValue(e.target.value);
              }}
            />
            {searchValue && (
              <svg
                className="resetIcon"
                height="20"
                viewBox="0 0 200 200"
                width="20"
                fill="currentColor"
                onClick={(e: React.MouseEvent<SVGSVGElement>): void => {
                  setSearchValue("");
                }}
              >
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            )}
          </label>
          <Link to="/cart" className="cartInfo">
            <p>{totalPrice} &#8372;</p>
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{totalAmount}</p>
            </div>
          </Link>
        </>
      )}
    </header>
  );
};
