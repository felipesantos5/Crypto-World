import { useState, useEffect } from "react";
import { CoinData } from "../types/type";
import { fetchCoinData } from "../services/cryptoApiCoins";
import coinImages from "../constants/imageData";
import { SkeletonCardMostPopular } from "../components/skeletonLoader/skeletonMostPopular";
import { PriveVariation } from "../components/pricevariation/pricevariation";
import { motion } from "framer-motion";

const coinIds = ["bitcoin", "ethereum", "tether", "binance-coin", "polygon", "cardano", "solana", "polkadot", "avalanche", "dogecoin", "xrp", "usd-coin", "chainlink", "litecoin", "tron"];

export const CryptoList = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(coinIds);
      setCoinData(data);
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="dark:bg-zinc-900 dark:text-white transition-colors duration-1000">
      <section className="flex flex-wrap justify-center gap-10 py-10 px-5 max-w-7xl m-auto min-h-80vh overflow-x-hidden">
        {loading
          ? Array.from({ length: 15 }).map((_, index) => <SkeletonCardMostPopular key={index} />)
          : coinData.map((coin) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="flex flex-col justify-between shadow-xl rounded-lg w-52 h-60 p-4 bg-white dark:bg-zinc-800 dark:text-white text-black transition-colors duration-1000"
                key={coin.id}
              >
                <div className="flex justify-between mt-2 flex-wrap">
                  <img src={`/images/${coinImages[coin.id]}`} alt={coin.id} className="w-14" />
                  <PriveVariation children={coin.changePercent24Hr} />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">{coin.name}</h2>
                  <p className="text-gray-600 text-lg font-semibold dark:text-white">$ {coin.priceUsd.slice(0, 7)}</p>
                </div>
                <div>
                  <a href={coin.explorer} target="_blank" className="underline ">
                    see more
                  </a>
                </div>
              </motion.div>
            ))}
      </section>
    </main>
  );
};
