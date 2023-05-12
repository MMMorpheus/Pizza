import { FC, useEffect, useRef } from "react";
import {
  Categories,
  Sort,
  PizzasList,
  categories,
  options,
} from "../../components";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/redux";
import { optionsSelector } from "../../redux/options/selectors";
import { pizzasSelector } from "../../redux/pizzas/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import "./home.scss";

const Home: FC = () => {
  const isMounted = useRef<boolean>(false);
  const isSeacrched = useRef<boolean>(false);
  const location = useLocation();
  const { fetchPizzas, setDefaultOptions, setFilters } = useActions();
  const { pizzas, isLoading } = useAppSelector(pizzasSelector);
  const { ...params } = useAppSelector(optionsSelector);
  const navigate = useNavigate();

  const { category, sortOption, currentPage, order, searchValue, haveChanged } = params;

  // Проверяем, если был первый рендер, значит при изменении критериев поиска нужно вшить их в адрессную строку
  useEffect(() => {
    
    if (isMounted.current) {
      const query = qs.stringify(
        {
          page: currentPage,
          limim: 10,
          category: category.option === 0 ? "" : category.option,
          sortBy: sortOption.query,
          order,
        },
        { addQueryPrefix: true }
      );
      navigate(query);
    }
    isMounted.current = true;
  }, [category, sortOption, currentPage, order]);

  // Проверяем, если был первый рендер и! адресная строка именилась, значит нужно ее распарсить, и вшить параметры в редакс
  useEffect(() => {
    if (location.search && location.pathname === '/') {
      const serialized = qs.parse(location.search, { ignoreQueryPrefix: true });
      const optionsData = {
        category: categories.find(
          (i) => i.option === Number(serialized.category)
        ),
        sortOption: options.find((i) => i.query === serialized.sortBy),
        order: serialized.order,
      };
      setFilters(optionsData)
      isSeacrched.current = true;
    }
    
  }, []);

  // Проверяем, если приложение первый раз смонитровалось, но параметры поиска не меняли - запрашиваем пиццы. Если уже смонтировалось - делаем всего 1 запрос вместо двух.
  useEffect(() => {
    
    if(!isSeacrched.current) {
      fetchPizzas(params)
    }
    isSeacrched.current = false;
  }, [category, sortOption, order])

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
        <PizzasList
          items={pizzas}
          isFetching={isLoading}
          filterValue={searchValue}
        />
      </section>
    </>
  );
};

export default Home;