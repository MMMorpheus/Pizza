import { FC } from "react";
import { Link } from "react-router-dom";

import "./emptyCart.scss"

export const EmptyCart: FC = () => (
  <section className="empty_cart">
    <h2>Ваш кошик порожній &#128546;</h2>
    <p>
      Скоріше за все, ви ще не замовляли піцу. Для того, щоб замовити піцу,
      поверніться на головну сторінку.
    </p>
    <img src="./empty.png"/>
    <Link to="Pizza/main">Повернутись на головну</Link>
  </section>
);
