import { createContext, useContext } from "react";
import { IThemeContext } from "../util/types";

export const ThemeContext = createContext<IThemeContext | null>(null);
