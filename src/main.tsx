import ReactDOM from "react-dom/client";
import { Suspense, lazy } from "react";
import App from "./App";
import { Home, ErrorPage } from "./pages";
const Cart = lazy(() => import("./pages/Cart"));
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Pizza",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "Pizza/main",
        element: <Home />,
      },
      {
        path: "Pizza/cart",
        element: (
          <Suspense fallback={<>Завантаження кошику...</>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
