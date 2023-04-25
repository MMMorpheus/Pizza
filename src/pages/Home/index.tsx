import { FC, useState, useEffect } from "react";
import { Categories, Sort, PizzasList } from "../../components";
import {  Order } from "../../types/types";
import { IPizza } from "../../redux/models/IPizza";

import axios from "axios";
import { useAppDispach, useAppSelector } from "../../hooks/redux";
import { fetchPizzas } from "../../redux/slices/ActionsCreator";
axios.defaults.baseURL = "http://localhost:3000";


const options: string[] = ["рейтингом", "ціною", "алфавітом"];

const Home: FC = () => {
  const dispatch = useAppDispach();
  const {pizzas, isLoading, error} = useAppSelector(state => state.pizzasReduser)
 
  // async function getPizzas(category: IFilterOption, option: string, order:string) {
  //   const pizzas = await axios.get<IPizza[]>(
  //     `/products?${query(category)}${sorter(option, order)}`
  //   );
  // }

  // const [currentCategory, setCurrentCategory] = useState<IFilterOption>(
  //   categories[0]
  // );
  // const handleCategory = (i: number): void => {
  //   setCurrentCategory(categories[i]);
  // };

  const [currentOption, setCurrentOption] = useState(options[0]);
  const handleOption = (i: number): void => {
    setCurrentOption(options[i]);
  };

  const [order, setOrder] = useState(Order.asc);
  const handleOrder = (): void => {
    if (order === "asc") {
      setOrder(Order.desc);
    } else {
      setOrder(Order.asc);
    }
  };

  // function query(i: IFilterOption): string {
  //   let param: string = "category_like";
  //   switch (i.option) {
  //     case 0:
  //       param = "";
  //       break;
  //     case 1:
  //       param = `${param}=1`;
  //       break;
  //     case 2:
  //       param = `${param}=2`;
  //       break;
  //     case 3:
  //       param = `${param}=3`;
  //       break;
  //     case 4:
  //       param = `${param}=4`;
  //       break;
  //     case 5:
  //       param = `${param}=5`;
  //       break;
  //   }
  //   return param;
  // }

  function sorter(opt: string, order: string): string {
    let param: string = "";
    switch (opt) {
      case "рейтингом":
        param = `&_sort=rating&_order=${order}`;
        break;
      case "ціною":
        param = `&_sort=price&_order=${order}`;
        break;
      case "алфавітом":
        param = `&_sort=title&_order=${order}`;
        break;
    }
    return param;
  }

  
  useEffect (() => {
    dispatch(fetchPizzas())
  }, [])

  return (
    <>
      <div className="options_container">
        <Categories
          // items={categories}
          // current={currentCategory}
          // change={handleCategory}
        />
        <Sort
          items={options}
          current={currentOption}
          change={handleOption}
          changeOrder={handleOrder}
        />
      </div>
      <section className="list_container">
        {/* <h1>{currentCategory.title}</h1> */}
        <PizzasList items={pizzas} isFetching={isLoading} />
      </section>
    </>
  );
};

export default Home;
