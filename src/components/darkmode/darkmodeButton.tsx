import { useState, useEffect } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const DarkmodeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Verifica se há um valor salvo no localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Atualiza o valor no localStorage sempre que o modo escuro for alterado
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Atualiza a classe no elemento raiz da aplicação
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button className={`icon-container ${isDarkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
      {isDarkMode ? <IoMdSunny className="text-yellow-400 text-4xl icon" /> : <IoMdMoon className="text-gray-600 text-3xl icon" />}
    </button>
  );
};
