import "./app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import PizzasList from "./components/PizzasList";

import pizzas from './pizzas.json'

const App = () => {
  return (
    <main>
      <Header />
      <div className="options_container">
        <Categories />
        <PizzasList items={pizzas}/>
      </div>
    </main>
  );
};

export default App;
