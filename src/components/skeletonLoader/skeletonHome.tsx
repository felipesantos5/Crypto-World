export const SkeletonHome = () => {
  return (
    <section className="flex flex-col rounded-xl">
      <section className="grid grid-test gap-12 items-center justify-center w-full p-6 border-b">
        <div>
          <div className="bg-gray-300 w-6 h-8 rounded-md"></div>
        </div>
        <div>
          <div className="bg-gray-300 w-28 h-8 rounded-md"></div>
        </div>
        <div>
          <div className="bg-gray-300 w-32 h-7 rounded-md"></div>
        </div>
        <div>
          <div className="bg-gray-300 w-16 h-7 rounded-md"></div>
        </div>
        <div>
          <div className="bg-gray-300 w-28 h-7 rounded-md"></div>
        </div>
      </section>
    </section>
  );
};
