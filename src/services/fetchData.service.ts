import { CoinData } from "../interfaces/CoinData.ts";
import { restClient } from "../api/restClient.ts";

const fetchData = () => restClient.get<CoinData[]>("/ticker/24hr").then((res) => res.data);

const fetchService = {
    fetchData,
};

export default fetchService;
