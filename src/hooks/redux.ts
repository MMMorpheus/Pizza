
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispach, RootState } from "../redux/store";

export const useAppDispach = () => useDispatch<AppDispach>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


