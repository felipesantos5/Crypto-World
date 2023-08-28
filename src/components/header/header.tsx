import { Link } from "react-router-dom";
import { DarkmodeButton } from "../darkmode/darkmodeButton";
import { MenuHamburguer } from "./menuHamburguer/menuHamburguer";

export const Header = () => {
  return (
    <header className="bg-slate-50 dark:bg-slate-800 dark:text-white">
      <div className="flex items-center justify-between px-6 max-w-7xl h-10vh m-auto">
        <div>
          <h2 className="text-5xl font-bold lg:text-4xl md:text-3xl">Crypto World</h2>
        </div>
        <div className="flex items-center gap-8 font-semibold text-xl md:hidden slg:text-lg">
          <Link to="/">Home</Link>
          <Link to="/mostpopular">Most Popular</Link>
          <Link to="/cryptonotices">Crypto Notices</Link>
          <DarkmodeButton />
        </div>
        <MenuHamburguer />
      </div>
    </header>
  );
};
