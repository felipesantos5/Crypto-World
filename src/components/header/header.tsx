import { DarkmodeButton } from "../darkmode/darkmodeButton";

export const Header = () => {
  return (
    <header className="bg-slate-50 dark:bg-zinc-900 dark:text-white transition-colors duration-1000">
      <div className="flex items-center justify-between px-6 max-w-7xl h-10vh m-auto">
        <div>
          <h1 className="text-5xl font-bold lg:text-4xl md:text-3xl">Crypto World</h1>
        </div>
        <div className="flex items-center gap-8 font-semibold text-xl">
          <DarkmodeButton />
        </div>
      </div>
    </header>
  );
};
