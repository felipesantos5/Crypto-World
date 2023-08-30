import { DarkmodeButton } from "../darkmode/darkmodeButton";

export const Header = () => {
  return (
    <header className="dark:bg-slate-800 dark:text-white">
      <div className="flex items-center justify-between px-6 max-w-7xl h-10vh m-auto">
        <div>
          <h2 className="text-5xl font-bold lg:text-4xl md:text-3xl">Crypto World</h2>
        </div>
        <div className="flex items-center gap-8 font-semibold text-xl">
          <DarkmodeButton />
        </div>
      </div>
    </header>
  );
};
