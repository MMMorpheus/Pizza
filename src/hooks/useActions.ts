import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispach } from "./redux";
import { useMemo } from "react";


import { fetchPizzas } from "../redux/pizzas/actionsCreator";
import {actions as optionActions} from "../redux/options/slice"
import {actions as cartActions} from "../redux/cart/slice";

const rootActions = {
    ...optionActions, ...cartActions, fetchPizzas
}

export const useActions = () => {
    const dispatch = useAppDispach();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}