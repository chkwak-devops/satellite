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
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'athlete', width: 150, suppressSizeToFit: true, pinned: 'left' },
        { field: 'age', width: 50, maxWidth: 100, pinned: 'left' },
        { colId: 'country', field: 'country', maxWidth: 300 },
        { field: 'year', width: 90 },
        { field: 'date', width: 110 },
        { field: 'sport', width: 110 },
        { field: 'gold', width: 100 },
        { field: 'silver', width: 100 },
        { field: 'bronze', width: 100 },
        { field: 'total', width: 100 },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
            sortable: true,
        };
    }, []);

    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    const sizeToFit = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit({
            defaultMinWidth: 100,
            columnLimits: [{ key: 'country', minWidth: 900 }],
        });
    }, []);



    useEffect(() => {
        onGridReady();
        // fetch("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
        //     .then((result) => result.json())
        //     .then((rowData) => setRowData(rowData));
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
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                    ></AgGridReact>
                    {/* <AgGridReact
                        ref={gridRef} // Ref for accessing Grid's API
                        rowData={rowData} // Row Data for Rows
                        columnDefs={columnDefs} // Column Defs for Columns
                        defaultColDef={defaultColDef} // Default Column Properties
                        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                        rowSelection="multiple" // Options - allows click selection of rows
                        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                    /> */}



                </div>
            </div>
        </>
    );
};

export default TablePage;
