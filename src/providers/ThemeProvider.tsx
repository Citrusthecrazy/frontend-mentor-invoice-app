import { FC, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IThemeProvider } from "../util/types";

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((oldTheme) => !oldTheme);
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div className={`${darkTheme ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
