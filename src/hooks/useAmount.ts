import { useAppSelector } from "./redux";
import { cartSelector } from "../redux/cart/selectors";

type UseAmount = (title: string) => number

// Counts total amount of pizzas in cart with the same title (but with different types / sizes)

export const useAmount:UseAmount = (title): number => {

    const { cartPizzas } = useAppSelector(cartSelector);

    const amount = cartPizzas
    .filter((i) => i.title === title)
    .reduce<number>((acum: number, curr) => {
      return acum + curr.amount;
    }, 0);

    return amount
}