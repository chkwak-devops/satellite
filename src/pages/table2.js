import { useEffect, useState, useRef, useMemo, useCallback, forwardRef } from "react";
import styles from "@/styles/Home.module.css";

import {
    Icon,
    Dropdown,
    Button,
    Header,
    Divider,
    Image,
} from "semantic-ui-react";

import { AgGridReact, AgGridColumn } from "ag-grid-react";

const TablePage = () => {

    const gridRef = useRef();
    // const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    // const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: '협력사명', children: [{
                field: '',
                width: 180,
                filter: '',
                pinned: 'left'
            },
            ]
        },
        {
            headerName: 'Athlete Details',
            children: [
                {
                    field: 'athlete',
                    width: 180,
                    filter: 'agTextColumnFilter',
                    pinned: 'left'
                },
                {
                    field: 'age',
                    width: 90,
                    filter: 'agNumberColumnFilter',
                    pinned: 'left'
                },
                {
                    headerName: 'Country',
                    field: 'country',
                    width: 140,
                    pinned: 'left'
                },
            ],
        },
        {
            headerName: 'Sports Results',
            children: [
                { field: 'sport', width: 140 },
                {
                    columnGroupShow: 'closed',
                    field: 'total',
                    width: 100,
                    filter: 'agNumberColumnFilter',
                },
                {
                    columnGroupShow: 'closed',
                    field: 'gold',
                    width: 100,
                    filter: 'agNumberColumnFilter',
                },
                {
                    columnGroupShow: 'closed',
                    field: 'silver',
                    width: 100,
                    filter: 'agNumberColumnFilter',
                },
                {
                    columnGroupShow: 'open',
                    field: 'bronze',
                    width: 100,
                    filter: 'agNumberColumnFilter',
                },
            ],
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
            sortable: true,
            filter: true,
        };
    }, []);

    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    useEffect(() => {
        onGridReady();
    }, []);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    // border: "1px dashed grey",
                }}
            >

                <div
                    style={{
                        fontSize: 20,
                        paddingBottom: 10,
                        width: "100%",
                        fontWeight: "bold",
                        // border: "1px dashed grey",
                    }}
                >
                    <Icon name="angle right" />
                    포트폴리오 대시보드
                </div>


                <div
                    className="ag-theme-alpine"
                    style={{
                        width: "100%",
                        height: 800,
                        borderWidth: 1,
                        borderStyle: "dashed",
                    }}
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                    ></AgGridReact>

                </div>
            </div>
        </>
    );
};

export default TablePage;
