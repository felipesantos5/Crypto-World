import { useContext } from "react";
import { DarkModeContext, DarkModeContextProps } from "../contexts/darkModeContext";

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
