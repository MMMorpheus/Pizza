import "./app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzasList from "./components/PizzasList";

import pizzas from "./pizzas.json";

const App = () => {
  return (
    <main>
      <Header />
      <div className="options_container">
        <Categories />
        <Sort />
      </div>
      <section className="list_container">
        <h1>Усі піци</h1>
        <PizzasList items={pizzas} />
      </section>
    </main>
  );
};

export default App;
