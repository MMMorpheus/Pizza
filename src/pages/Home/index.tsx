import { FC, useEffect } from "react";
import { Categories, Sort, PizzasList } from "../../components";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";

import "./home.scss"

const Home: FC = () => {
  const { fetchPizzas, setDefaultOptions } = useActions();
  const { pizzas, isLoading, error } = useAppSelector(
    (state) => state.pizzasReduser
  );
  const { category, sortOption, currentPage, order, searchValue, haveChanged } =
    useAppSelector((state) => state.optionsReducer);

  useEffect(() => {
    fetchPizzas({ category, sortOption, currentPage, order, searchValue });
  }, [category, sortOption, currentPage, order, searchValue]);

  return (
    <>
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <div className="container">
          <h1>{category.title} піци</h1>
          {haveChanged && <button onClick={() => {setDefaultOptions()}}>Скинути усі фільтри</button>}
        </div>
        <PizzasList items={pizzas} isFetching={isLoading} />
      </section>
    </>
  );
};

export default Home;
