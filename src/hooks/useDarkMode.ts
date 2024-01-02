import { useContext } from "react";
import { DarkModeContext, DarkModeContextProps } from "../contexts/darkModeContext";

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("dark mode error");
  }
  return context;
};
