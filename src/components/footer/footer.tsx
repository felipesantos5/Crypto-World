import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-center font-semibold h-full bg-slate-50 dark:bg-zinc-900 dark:text-white py-5 px-2 transition-colors duration-1000">
      <Link to="/" className="sm:text-sm">
        Copyright © {new Date().getFullYear()}. All rights are reserved
      </Link>
    </footer>
  );
};
