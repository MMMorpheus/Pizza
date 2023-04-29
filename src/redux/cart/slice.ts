import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartPizza, ICurrentPizza } from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState: ICartState = {
  totalAmount: 0,
  totalPrice: 0,
  cartPizzas: [],
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
      const pizza = state.cartPizzas.find(
        (i) =>
          i.title === action.payload.title &&
          i.size === action.payload.size &&
          i.type === action.payload.type
      );
      if (pizza) {
        pizza.amount++;
        pizza.priceByAmount += action.payload.price;
      }

      state.totalPrice += action.payload.price;
      state.totalAmount++;
    },
    removeOne(state, action: PayloadAction<ICartPizza>) {
      const pizza = state.cartPizzas.find(
        (i) =>
          i.title === action.payload.title &&
          i.size === action.payload.size &&
          i.type === action.payload.type
      );
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

export const { actions, reducer } = CartSlice;