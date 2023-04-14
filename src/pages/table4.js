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


    const rowData = [

    ];

    const columnDefs = [
        {
            headerName: '협력사',
            children: [
                { field: '' },
            ]
        },

        {
            headerName: '가공담당',
            children: [
                { field: '매출' },
                { field: '신장률' },
                { field: '구성비' },
                { field: '증감' },
                { field: '매장매출' },
                { field: '신장률' },
                { field: '상품이익액' },
                { field: '증감' },
                { field: '상품이익률' },
                { field: '증감' },
                { field: '영업이익액' },
                { field: '증감' },
                { field: '영업이익률' },
                { field: '증감' },
            ]
        },
        {
            headerName: '가공A',
            children: [
                { field: '매출(신장률)' },
                { field: '구성비(증감)' },
                { field: '매장매출(신장률)' },
                { field: '상품이익률(증감)' },
                { field: '영업이익률(증감)' },
            ]
        }



    ];

    const defaultColDef = useMemo(() => {
        return {
            width: 70,
            sortable: true,
            resizable: true,
            // filter: true,
            headerComponentParams: {
                menuIcon: 'fa-cog',
            },
        };
    }, []);


    const onCellClicked = (params) => {
        console.log("Cell was clicked : %o ", params);

        console.log(params.data.athlete);
        alert(params.data.athlete);

    }


    useEffect(() => {
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
                        onCellClicked={onCellClicked}
                    ></AgGridReact>
                </div>

            </div>


        </>
    );
};

export default TablePage;
