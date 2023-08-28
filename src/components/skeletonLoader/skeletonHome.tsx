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

{
  /* <div key={coin.id} className="grid grid-test gap-12 items-center justify-center w-full p-6 border-b">
<div className="flex justify-start items-start">
  <p className="font-medium">{coin.rank}</p>
</div>

<div className="font-semibold text-lg flex items-center justify-start gap-4 w-52">
  <img src={`/images/${coinImages[coin.id]}`} alt={coin.id} className="w-12" />
  <div className="flex items-center gap-2">
    <h2>{coin.name}</h2>
    <span className="text-gray-400 text-sm">{coin.symbol}</span>
  </div>
</div>

<div className="w-36">
  <p className="">$ {coin.priceUsd.slice(0, 10)}</p>
</div>

<div className="w-24">
  <PriveVariation children={coin.changePercent24Hr} />
</div>

<div className="flex justify-start items-start">
  <p>{coin.volumeUsd24Hr.slice(0, 15)}</p>
</div>
</div> */
}
