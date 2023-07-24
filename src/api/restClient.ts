import axios from "axios";

export const restClient = axios.create({
    baseURL: "https://data.binance.com/api/v3",
});
