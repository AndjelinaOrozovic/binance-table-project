import axios from "axios";
import { CoinData } from "../interfaces/CoinData.ts";

const baseUrl = "https://data.binance.com/api/v3/ticker/24hr";

const fetchData = () => axios.get<CoinData[]>(baseUrl).then((res) => res.data);

const fetchService = {
    fetchData,
};

export default fetchService;
