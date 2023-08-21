import axios from "axios";

const BASE_URL = "https://api.coincap.io/v2/assets";

export const fetchCoinData = async (coinIds?: string[]) => {
  try {
    let url = BASE_URL;

    if (coinIds) {
      const coinsQueryString = coinIds.join(",");
      url = `${BASE_URL}?ids=${coinsQueryString}`;
    }

    const response = await axios.get(url);
    const formattedData = response.data.data;
    return formattedData;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [];
  }
};
