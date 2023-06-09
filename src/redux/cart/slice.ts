import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartPizza, ICurrentPizza } from "./types";
import { v4 as uuidv4 } from "uuid";
import { getCartDataFromLS } from "../../utils/getCartDataFromLS";

const { items, price, count } = getCartDataFromLS();

const initialState: ICartState = {
  totalAmount: count,
  totalPrice: price,
  cartPizzas: items,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICurrentPizza>) {
      state.totalAmount += 1;
      state.totalPrice += action.payload.price;
      if (
        state.cartPizzas.some(
          (item) =>
            item.title === action.payload.title &&
            item.size === action.payload.size &&
            item.type === action.payload.type
        )
      ) {
        const pizza = state.cartPizzas.find(
          (i) =>
            i.title === action.payload.title &&
            i.size === action.payload.size &&
            i.type === action.payload.type
        );
        if (pizza) {
          pizza.amount += 1;
          pizza.priceByAmount = pizza.amount * pizza.price;
        }
      } else {
        state.cartPizzas.push({
          ...action.payload,
          cartId: uuidv4(),
          amount: 1,
          priceByAmount: action.payload.price,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<ICartPizza>) {
      state.cartPizzas = state.cartPizzas.filter(
        (i) => i.cartId !== action.payload.cartId
      );
      state.totalAmount -= action.payload.amount;
      state.totalPrice -= action.payload.priceByAmount;
    },
    resetCart(state) {
      state.totalAmount = 0;
      state.totalPrice = 0;
      state.cartPizzas = [];
    },
    addOne(state, action: PayloadAction<ICartPizza>) {
      const pizza = findItem(state, action);
      if (pizza) {
        pizza.amount++;
        pizza.priceByAmount += action.payload.price;
      }
      state.totalPrice += action.payload.price;
      state.totalAmount++;
    },
    removeOne(state, action: PayloadAction<ICartPizza>) {
      const pizza = findItem(state, action);
      if (pizza && pizza.amount > 1) {
        pizza.amount--;
        pizza.priceByAmount -= action.payload.price;
        state.totalPrice -= action.payload.price;
        state.totalAmount--;
      } else {
        CartSlice.caseReducers.removeFromCart(state, action);
      }
    },
  },
});

function findItem(state: ICartState, action: PayloadAction<ICartPizza>) {
  return state.cartPizzas.find(
    (i) =>
      i.title === action.payload.title &&
      i.size === action.payload.size &&
      i.type === action.payload.type
  );
}

export const { actions, reducer } = CartSlice;
