import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    //bg-slate-50 dark:bg-slate-800 dark:text-white
    <footer className="text-center font-semibold h-10vh bg-slate-50 dark:bg-slate-800 dark:text-white py-2">
      <Link to="/">Copyright © 2023. All rights are reserved</Link>
    </footer>
  );
};
