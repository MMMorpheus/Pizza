import { FC, useEffect } from "react";
import { CartNotification } from "../CartNotification";
import { useAppSelector, useActions } from "../../hooks";
import { optionsSelector } from "../../redux/options/selectors";
import { cartSelector } from "../../redux/cart/selectors";
import { Link, useLocation } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import clsx from 'clsx'
import styles from "./header.module.scss";

export const Header: FC = () => {
  const { setSearchValue } = useActions();
  const { searchValue } = useAppSelector(optionsSelector);
  const { cartPizzas } = useAppSelector(cartSelector);

  const location = useLocation();
  useEffect(() => {
    const json = JSON.stringify(cartPizzas);
    window.localStorage.setItem("cart", json);
  }, [cartPizzas]);

  return (
    <header className={styles.header}>
      <Link to="/Pizza/" className={styles.storeInfo}>
        <img
          src="./logo.svg"
          alt="Logo"
          className={clsx(styles.logo, location.pathname === "/Pizza/cart" && styles['_rotation'])}
        />
        <div>
          <h2>React Pizza</h2>
          <p>Найсмачніша піцца у цілому Всесвіті</p>
        </div>
      </Link>
      {location.pathname !== "/Pizza/cart" && (
        <>
          <label>
            <svg className={styles.searchIcon} fill="currentColor" viewBox="0 0 32 32">
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
                className={styles.resetIcon}
                width="20"
                viewBox="0 0 200 200"
                fill="currentColor"
                onClick={(e: React.MouseEvent<SVGSVGElement>): void => {
                  setSearchValue("");
                }}
              >
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            )}
          </label>
          <CartNotification />
        </>
      )}
    </header>
  );
};
