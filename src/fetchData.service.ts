import axios from "axios";
import {CoinData} from "./CoinData.ts";

function fetchData() {
    return axios.get<CoinData[]>("https://data.binance.com/api/v3/ticker/24hr").then(res => res.data);
}

const fetchService = {
    fetchData
}

export default fetchService;