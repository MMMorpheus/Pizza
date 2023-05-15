import { FC, useEffect } from "react";
import {
  Categories,
  Sort,
  PizzasList,
  CartNotification,
} from "../../components";

import { useActions, useAppSelector, useReduxQueryParams } from "../../hooks";
import { optionsSelector } from "../../redux/options/selectors";
import { pizzasSelector } from "../../redux/pizzas/selectors";
import { useLocation } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

import "./home.scss";

const Home: FC = () => {
  // Redux actions
  const { fetchPizzas } = useActions();

  // Redux data and dependecies
  const { pizzas, isLoading } = useAppSelector(pizzasSelector);
  const { category, sortOption, order, haveChanged, searchValue } =
    useAppSelector(optionsSelector);

  // URL search query string
  const { search } = useLocation();

  // Handling options/filters to URL / parsing into redux options after page reload
  const { setQueryParams, resetQueryParams, updateReduxOptions } =
    useReduxQueryParams();

  // Media queries UI dependencies
  // const biggerThen768: boolean = useMediaPredicate("(min-width: 768px)");
  const mobile: boolean = useMediaPredicate("(max-width: 576px)");

  useEffect(() => {
    if (search) {
      updateReduxOptions(search);
    }
    fetchPizzas(search);
  }, [search]);

  useEffect(() => {
    if (haveChanged) {
      setQueryParams();
    }
  }, [haveChanged, category, sortOption, order]);

  return (
    <>
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <div className="container">
          <h1>{category.title} піци</h1>
          {/* {haveChanged && biggerThen768 && (
            <button
              onClick={() => {
                setDefaultOptions();
                resetQueryParams();
              }}
            >
              Скинути усі фільтри
            </button>
          )}
          {haveChanged && !biggerThen768 && (
            <button
              title="reset filters"
              onClick={() => {
                setDefaultOptions();
                resetQueryParams();
              }}
            >
              X
            </button>
          )} */}
        </div>
        <PizzasList
          items={pizzas}
          isFetching={isLoading}
          filterValue={searchValue}
        />
        {mobile && <CartNotification isMobile={mobile} />}
      </section>
    </>
  );
};

export default Home;
