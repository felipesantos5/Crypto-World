export interface CoinData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export interface CryptoNoticesInterface {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
  source: {
    name: string;
  };
}
