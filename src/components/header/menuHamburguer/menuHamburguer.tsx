import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { DarkmodeButton } from "../../darkmode/darkmodeButton";
import { useState } from "react";

export const MenuHamburguer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="hidden md:block">
      <button onClick={toggleMenu} className="hidden md:block">
        <HiOutlineMenu className="text-3xl" />
      </button>
      {menuOpen && (
        <div className="fixed inset-0 bg-white w-full h-full p-6 dark:text-white dark:bg-slate-800">
          <button onClick={toggleMenu} className="hidden md:block">
            <HiOutlineMenu className="text-3xl" />
          </button>
          <nav className="w-full h-full p-5 flex flex-col items-center gap-6 font-semibold slg:text-lg ">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/mostpopular" onClick={closeMenu}>
              Most Popular
            </Link>
            <Link to="/cryptonotices">Crypto Notices</Link>
            <DarkmodeButton />
          </nav>
        </div>
      )}
    </div>
  );
};
