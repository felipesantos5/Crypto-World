import { useState, useEffect } from "react";
import { CoinData } from "../types/type";
import { fetchCoinData } from "../services/cryptoApiCoins";
import coinImages from "../constants/imageData";
import { SkeletonCardMostPopular } from "../components/skeletonLoader/skeletonMostPopular";
import { PriveVariation } from "../components/pricevariation/pricevariation";

const coinIds = ["bitcoin", "ethereum", "tether", "binance-coin", "polygon", "cardano", "solana", "polkadot", "avalanche", "dogecoin"];

export const MostPopular = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(coinIds); // Substitua pelo seu código real de requisição
      setCoinData(data);
      setLoading(false);
    };

    fetchData(); // Chama a função fetchData imediatamente

    const interval = setInterval(() => {
      fetchData(); // Chama a função fetchData a cada 2 minutos (120000 ms)
    }, 120);

    return () => {
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, []); // Só executa o efeito quando o componente monta

  return (
    <main className=" dark:bg-slate-800 dark:text-white py-10 ">
      <section className="flex flex-wrap justify-center gap-10 px-8 max-w-7xl m-auto min-h-80vh overflow-x-hidden">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <SkeletonCardMostPopular key={index} />)
          : coinData.map((coin) => (
              <div className="flex flex-col justify-between shadow-xl rounded-lg w-52 h-60 p-4 bg-white text-black" key={coin.id}>
                <div className="flex justify-between mt-2 flex-wrap">
                  <img src={`/images/${coinImages[coin.id]}`} alt={coin.id} className="w-14" />
                  <PriveVariation children={coin.changePercent24Hr} />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">{coin.name}</h2>
                  <p className="text-gray-600 text-lg font-semibold">$ {coin.priceUsd.slice(0, 7)}</p>
                </div>
                <div>
                  <a href={coin.explorer} target="_blank" className="underline ">
                    see more
                  </a>
                </div>
              </div>
            ))}
      </section>
    </main>
  );
};
