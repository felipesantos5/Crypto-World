import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { DarkmodeButton } from "../../darkmode/darkmodeButton";
import { useEffect, useState } from "react";

export const MenuHamburguer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden"; // Impede o scroll na direção vertical
    } else {
      document.body.style.overflowY = "auto"; // Restaura o scroll
    }
  }, [menuOpen]);

  return (
    <div className="hidden sm:block relative">
      <button onClick={toggleMenu} className="hidden md:block">
        <HiOutlineMenu className="text-3xl" />
      </button>
      {menuOpen && (
        <div className="fixed inset-0 bg-white w-full h-full p-6 dark:text-white dark:bg-slate-800 z-50 text">
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <HiOutlineMenu className="text-3xl right-0" />
            </button>
          </div>
          <nav className="w-full h-full p-5 flex flex-col items-center gap-6 font-semibold mt-4 slg:text-lg">
            <Link to="/" onClick={closeMenu} className="text-2xl">
              Most Popular
            </Link>
            <Link to="/cryptonotices" onClick={closeMenu} className="text-2xl">
              Crypto Notices
            </Link>
            <DarkmodeButton />
          </nav>
        </div>
      )}
    </div>
  );
};
