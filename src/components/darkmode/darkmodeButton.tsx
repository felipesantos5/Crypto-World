import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useDarkMode } from "../../hooks/useDarkMode";

export const DarkmodeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={`icon-container ${isDarkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
      {isDarkMode ? <IoMdSunny className="text-yellow-400 text-4xl icon" /> : <IoMdMoon className="text-gray-600 text-3xl icon" />}
    </button>
  );
};
