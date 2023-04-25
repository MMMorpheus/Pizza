import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppDispach } from "./redux";

import {actions as optionActions} from "../redux/slices/OptionsSlice"

const rootActions = {
    ...optionActions
}

export const useActions = () => {
    const dispatch = useAppDispach();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}