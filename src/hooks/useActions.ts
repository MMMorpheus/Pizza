import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppDispach } from "./redux";

import {actions as optionActions} from "../redux/slices/OptionsSlice"
import { fetchPizzas } from "../redux/slices/ActionsCreator";
import {actions as cartActions} from "../redux/slices/CartSlice";

const rootActions = {
    ...optionActions, ...cartActions, fetchPizzas
}

export const useActions = () => {
    const dispatch = useAppDispach();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}