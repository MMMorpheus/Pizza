import { FC } from "react";
import { Header } from "./components";
import "./app.scss";

import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Outlet />
      </main>
    </Provider>
  );
};

export default App;
