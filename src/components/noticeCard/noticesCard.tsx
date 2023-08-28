import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCryptoNews } from "../../services/cryptoApiNews";
import { CryptoNoticesInterface } from "../../types/type";
import { SkeletonCardNotices } from "../skeletonLoader/skeletonNotices";

export const NoticesCard = () => {
  const [news, setNews] = useState<CryptoNoticesInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoNews()
      .then((newsData) => {
        setNews(newsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 max-w-7xl m-auto mt-8">
      <motion.section className="flex flex-col gap-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
        {loading
          ? Array.from({ length: 15 }).map((_, index) => <SkeletonCardNotices key={index} />)
          : news.slice(0, 15).map((article, index) => (
              <motion.section
                key={index}
                className="flex justify-between gap-6 slg:flex-col-reverse slg:items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div>
                  <img src={article.urlToImage} alt="" className="w-500 h-64 max-h-96 rounded-lg slg:w-full slg:h-full" />
                </div>
                <div className="w-2/3 flex flex-col gap-3 slg:w-full xsm:max-h-full">
                  <div>
                    <a href={article.url} target="_blank">
                      {article.source.name}
                    </a>
                  </div>
                  <h2 className="font-bold text-3xl">{article.title}</h2>
                  <p className="text-lg">{article.description}</p>
                  <p className="font-semibold text-sm">{article.publishedAt.slice(0, 10)}</p>
                </div>
              </motion.section>
            ))}
      </motion.section>
    </div>
  );
};
