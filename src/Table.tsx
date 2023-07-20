import {CoinData} from "./CoinData.ts";
import './App.css'
import {AgGridReact} from 'ag-grid-react';
import {ValueFormatterParams} from 'ag-grid-community';
import {useQuery} from '@tanstack/react-query';
import moment from 'moment';
import './Table.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

export default function Table() {

    const {isLoading, error, data} = useQuery<CoinData[], Error>({queryKey: ['coins'], queryFn: fetchData});

    function fetchData() {
        return axios.get<CoinData[]>("https://data.binance.com/api/v3/ticker/24hr").then(res => res.data);
    }

    const columnDefs = [
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

    if (isLoading) return <div className="parent"><div className="loader"></div></div>; //moze se vratitit bilo kakav element(animacija)

    if (error) return <h1>'An error has occurred: ' + error.message</h1>;

    return (
        <div className="ag-theme-alpine" style={{height: "100vh", width: "100%"}}>
            <AgGridReact
                rowData={data}
                columnDefs={columnDefs}
                rowGroupPanelShow={'always'}
                pivotPanelShow={'always'}
                pagination={true}
            >
            </AgGridReact>
        </div>
    );
}