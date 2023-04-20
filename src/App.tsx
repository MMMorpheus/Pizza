import { FC, useState, useEffect } from "react";
import { Header, Categories, Sort, PizzasList } from "./components";

import "./app.scss";

import { IPizza } from "./types/types";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const App: FC = () => {
  const [products, setProducts] = useState<IPizza[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const getPizzas = async () => {
    const pizzas = await axios.get<IPizza[]>("/products");
    setProducts(pizzas.data)
  };

  useEffect(() => {
    try {
      getPizzas();
    } catch (e) {
     console.log(e) 
    } finally {
      setIsFetching(false)
    }
  }, []);

  return (
    <main>
      <Header />
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <h1>Усі піци</h1>
        <PizzasList items={products} isFetching={isFetching}/>
      </section>
    </main>
  );
};

export default App;
