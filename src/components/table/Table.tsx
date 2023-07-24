import { CoinData } from "../../interfaces/CoinData.ts";
import "../../App.css";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from "@tanstack/react-query";
import "./Table.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { columnDefs } from "../../consts/TableColumnType.ts";
import fetchDataService from "../../services/fetchData.service.ts";

export default function Table() {
    const { isLoading, error, data } = useQuery<CoinData[], Error>({
        queryKey: ["coins"],
        queryFn: fetchDataService.fetchData,
    });

    if (isLoading)
        return (
            <div className="parent">
                <div className="loader"></div>
            </div>
        );

    if (error) {
        return (
            <div className="parent">
                <h1>An error has occurred: {error.message}</h1>
            </div>
        );
    }

    return (
        <div className="ag-theme-alpine table">
            <AgGridReact
                rowData={data}
                columnDefs={columnDefs}
                rowGroupPanelShow="always"
                pivotPanelShow="always"
                pagination
            ></AgGridReact>
        </div>
    );
}
