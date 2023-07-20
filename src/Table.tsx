import {CoinData} from "./CoinData.ts";
import './App.css'
import {AgGridReact} from 'ag-grid-react';
import {useQuery} from '@tanstack/react-query';
import './Table.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {columnDefs} from "./TableColumnType.ts";
import fetchDataService from "./fetchData.service.ts";

export default function Table() {

    const {isLoading, error, data} = useQuery<CoinData[], Error>({queryKey: ['coins'], queryFn: fetchDataService.fetchData});

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