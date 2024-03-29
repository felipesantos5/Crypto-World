import Lottie from "lottie-react";
import errorimagem from "../../assets/errorimage.json";

export const ErrorPageComponent = () => {
  return (
    <main className="bg-slate-50 dark:bg-zinc-900 dark:text-white transition-colors duration-1000">
      <section className="flex items-center py-10 max-w-6xl m-auto min-h-80vh px-10">
        <div className="flex flex-col max-w-5xl gap-2">
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-xl w-2/3 slg:w-full">
            Sorry, the page you're looking for could not be found. This might be due to an incorrect URL, a removed page, or a temporary server issue. Please check the URL and try again.
          </p>
        </div>
        <Lottie animationData={errorimagem} className="w-full slg:hidden"></Lottie>
      </section>
    </main>
  );
};
