import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-center font-semibold h-full dark:bg-slate-800 dark:text-white py-5 px-2">
      <Link to="/" className="sm:text-sm">
        Copyright © {new Date().getFullYear()}. All rights are reserved
      </Link>
    </footer>
  );
};
