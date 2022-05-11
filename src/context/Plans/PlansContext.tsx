import { createContext } from "react";
import { PlansContextProps } from "../types";

export const PlansContext = createContext<PlansContextProps>({} as PlansContextProps)
