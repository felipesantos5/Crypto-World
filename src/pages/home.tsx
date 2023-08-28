import { useEffect, useState } from "react";
import { CoinData } from "../types/type";
import { fetchCoinData } from "../services/cryptoApiCoins";
import coinImages from "../constants/imageData";
import { PriveVariation } from "../components/pricevariation/pricevariation";
import { SkeletonHome } from "../components/skeletonLoader/skeletonHome";

export const Home = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setCoinData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <main className="max-w-7xl m-auto my-12">
        <div className="overflow-x-auto">
          <div className="flex p-4">
            <section className="grid grid-test gap-12 items-center justify-center w-full px-10 border-b">
              <p>rank</p>
              <p className="w-52">nome</p>

              <div className="w-36">
                <p className="">price</p>
              </div>

              <div className="w-24">
                <p>24h %</p>
              </div>

              <p>volume 24Hr</p>
            </section>
          </div>
          <div className="flex p-4">
            <section className="flex flex-col rounded-xl">
              {loading
                ? Array.from({ length: 30 }).map((_, index) => <SkeletonHome key={index} />)
                : coinData.slice(0, 30).map((coin) => (
                    <div key={coin.id} className="grid grid-test gap-12 items-center justify-center w-full p-6 border-b">
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
                    </div>
                  ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
