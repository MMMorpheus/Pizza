import { FC } from "react";
import { Header} from "./components";
import "./app.scss";

import {Outlet} from 'react-router-dom'

const App: FC = () => {
  

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
