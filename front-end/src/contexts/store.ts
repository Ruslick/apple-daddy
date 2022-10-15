import { createContext } from "react";
import { IProduct } from "../pages";

export const Store = createContext<null | IProduct[]>(null)