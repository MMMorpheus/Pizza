import { FC, useEffect } from "react";
import { Categories, Sort, PizzasList } from "../../components";

import axios from "axios";
import { useAppDispach, useAppSelector } from "../../hooks/redux";
import { fetchPizzas } from "../../redux/slices/ActionsCreator";
import { useActions } from "../../hooks/useActions";
axios.defaults.baseURL = "http://localhost:3000";

const Home: FC = () => {
  const { fetchPizzas } = useActions();
  const { pizzas, isLoading, error } = useAppSelector(
    (state) => state.pizzasReduser
  );
  const { category, sortOption, currentPage, order } = useAppSelector(
    (state) => state.optionsReducer
  );

  useEffect(() => {
    fetchPizzas({ category, sortOption, currentPage, order });
  }, [category, sortOption, currentPage, order]);

  return (
    <>
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <h1>{category.title}</h1>
        <PizzasList items={pizzas} isFetching={isLoading} />
      </section>
    </>
  );
};

export default Home;
