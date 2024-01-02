import { createContext, useState, useEffect, ReactNode } from "react";

export interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" || (prefersDarkMode && savedMode !== "false");
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};
