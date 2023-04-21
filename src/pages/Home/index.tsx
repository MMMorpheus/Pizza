import { FC, useState, useEffect } from "react";
import { Categories, Sort, PizzasList } from "../../components";
import { IFilterOption, IPizza } from "../../types/types";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const categories: IFilterOption[] = [
  { title: "Усі", option: 0 },
  { title: "М'ясні", option: 1 },
  { title: "Гриль", option: 2 },
  { title: "Гострі", option: 3 },
  { title: "Вегетаріанські", option: 4 },
  { title: "Закриті", option: 5 },
];
const options: string[] = ["рейтингом", "ціною", "алфавітом"];

const Home: FC = () => {
  const [products, setProducts] = useState<IPizza[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  async function getPizzas(i: IFilterOption, o:string) {
    const pizzas = await axios.get<IPizza[]>(`/products?${query(i)}${sorter(o)}`);
    setProducts(pizzas.data);
  }

  const [currentCategory, setCurrentCategory] = useState<IFilterOption>(
    categories[0]
  );
  const handleCategory = (i: number): void => {
    setCurrentCategory(categories[i]);
  };

  const [currentOption, setCurrentOption] = useState(options[0]);
  const handleOption = (i: number): void => {
    setCurrentOption(options[i]);
  };

  function query(i: IFilterOption): string {
    let param: string = "category_like";
    switch (i.option) {
      case 0:
        param = "";
        break;
      case 1:
        param = `${param}=1`;
        break;
      case 2:
        param = `${param}=2`;
        break;
      case 3:
        param = `${param}=3`;
        break;
      case 4:
        param = `${param}=4`;
        break;
      case 5:
        param = `${param}=5`;
        break;
    }
    return param;
  }

  function sorter(opt: string): string {
    let param: string = "";
    switch (opt) {
      case "рейтингом":
        param = "&_sort=rating&_order=asc";
        break;
      case "ціною":
        param = "&_sort=price&_order=asc";
        break;
      case "алфавітом":
        param = "&_sort=title&_order=asc";
        break;
    }
    return param;
  }

  useEffect(() => {
    try {
      setIsFetching(true);
      getPizzas(currentCategory, currentOption);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, [currentCategory, currentOption]);

  return (
    <>
      <div className="options_container">
        <Categories
          items={categories}
          current={currentCategory}
          change={handleCategory}
        />
        <Sort items={options} current={currentOption} change={handleOption} />
      </div>
      <section className="list_container">
        <h1>Усі піци</h1>
        <PizzasList items={products} isFetching={isFetching} />
      </section>
      ;
    </>
  );
};

export default Home;