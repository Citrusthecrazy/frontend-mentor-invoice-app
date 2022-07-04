import { FC, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IThemeProvider } from "../util/types";

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [theme,setTheme] = useLocalStorage("theme","light");
  const toggleTheme = () => {
    setDarkTheme((oldTheme) => !oldTheme);
  };
  useEffect(() => {
    darkTheme ? setTheme("dark") : setTheme("light");
  }, [darkTheme])
  useEffect(() => {
    if(theme === "dark") 
      setDarkTheme(true)
  }, [])
  
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div className={`${darkTheme ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
