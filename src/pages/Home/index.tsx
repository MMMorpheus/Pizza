import { FC, useEffect } from "react";
import { Categories, Sort, PizzasList } from "../../components";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/redux";
import { optionsSelector } from "../../redux/options/selectors";
import { pizzasSelector } from "../../redux/pizzas/selectors";

import "./home.scss";

const Home: FC = () => {
  const { fetchPizzas, setDefaultOptions } = useActions();
  const { pizzas, isLoading } = useAppSelector(pizzasSelector);
  const { ...params } = useAppSelector(optionsSelector);

  const {category, sortOption, currentPage, order, searchValue, haveChanged} = params;

  useEffect(() => {
    fetchPizzas(params);
  }, [category, sortOption, currentPage, order]);

  
  return (
    <>
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <div className="container">
          <h1>{category.title} піци</h1>
          {haveChanged && (
            <button
              onClick={() => {
                setDefaultOptions();
              }}
            >
              Скинути усі фільтри
            </button>
          )}
        </div>
        <PizzasList items={pizzas} isFetching={isLoading} filterValue={searchValue}/>
      </section>
    </>
  );
};

export default Home;
