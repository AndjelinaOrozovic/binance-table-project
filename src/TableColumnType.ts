import {ValueFormatterParams} from "ag-grid-community";
import moment from "moment/moment";

export const columnDefs = [
    {field: 'symbol'},
    {field: 'priceChange', sortable: true},
    {
        field: 'priceChangePercent', cellStyle: (param) => {
            if (param.value < 0.0) {
                return {color: "red"}
            } else if (param.value == 0.0) {
                return {color: "orange"}
            }
            return {color: "green"}
        }, sortable: true
    },
    {field: 'weightedAvgPrice'},
    {field: 'prevClosePrice'},
    {field: 'lastPrice'},
    {field: 'lastQty'},
    {field: 'bidPrice'},
    {field: 'bidQty'},
    {field: 'askPrice'},
    {field: 'askQty'},
    {field: 'openPrice'},
    {field: 'highPrice'},
    {field: 'lowPrice'},
    {field: 'volume'},
    {field: 'quoteVolume'},
    {
        field: 'openTime', valueFormatter: (res: ValueFormatterParams) => {
            return moment(res.value).format('DD/MM/YYYY')
        }
    },
    {
        field: 'closeTime', valueFormatter: (res: ValueFormatterParams) => {
            return moment(res.value).format('DD/MM/YYYY')
        }
    },
    {field: 'firstId'},
    {field: 'lastId'},
    {field: 'count'},
];