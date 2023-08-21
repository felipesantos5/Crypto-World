import axios from "axios";
import { CryptoNoticesInterface } from "../types/type";

const apiKey = "a846022e95344ba99dad5080f2865cb2";

export const fetchCryptoNews = async () => {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const newsData: CryptoNoticesInterface[] = response.data.articles.filter((article: CryptoNoticesInterface) => article.urlToImage !== null);
    return newsData;
  } catch (error) {
    console.error("Erro ao obter dados de notícias:", error);
    return [];
  }
};
