import { CellClassParams, CellClassRules } from "ag-grid-community";
import { format } from "date-fns";

export const columnDefs = [
    {
        field: "symbol",
    },
    {
        field: "priceChange",
        cellClassRules: {
            negative: (params: CellClassParams) => params.value < 0,
            neutral: (params: CellClassParams) => params.value == 0,
            positive: (params: CellClassParams) => params.value > 0,
        } as CellClassRules,
        sortable: true,
        comparator: (valueA: number, valueB: number) => valueA - valueB,
    },
    {
        field: "priceChangePercent",
        cellClassRules: {
            negative: (params: CellClassParams) => params.value < 0,
            neutral: (params: CellClassParams) => params.value == 0,
            positive: (params: CellClassParams) => params.value > 0,
        } as CellClassRules,
        sortable: true,
        comparator: (valueA: number, valueB: number) => valueA - valueB,
    },
    {
        field: "weightedAvgPrice",
    },
    {
        field: "prevClosePrice",
    },
    {
        field: "lastPrice",
    },
    {
        field: "lastQty",
    },
    {
        field: "bidPrice",
    },
    {
        field: "bidQty",
    },
    {
        field: "askPrice",
    },
    {
        field: "askQty",
    },
    {
        field: "openPrice",
    },
    {
        field: "highPrice",
    },
    {
        field: "lowPrice",
    },
    {
        field: "volume",
    },
    {
        field: "quoteVolume",
    },
    {
        field: "openTime",
        valueFormatter: (res: { value: string }) => {
            return format(new Date(res.value), "dd/MM/yyyy");
        },
    },
    {
        field: "closeTime",
        valueFormatter: (res: { value: string }) => {
            return format(new Date(res.value), "dd/MM/yyyy");
        },
    },
    {
        field: "firstId",
    },
    {
        field: "lastId",
    },
    {
        field: "count",
    },
];
