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
        {
            athlete: 'Michael Phelps1',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps2',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps3',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps4',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps5',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps6',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },
        {
            athlete: 'Michael Phelps7',
            medals: {
                gold: 8, silver: 1, bronze: 0
            }
        },


    ];

    const columnDefs = [
        {
            headerName: 'Group A1',
            children: [
                {
                    field: 'athlete',
                    resizable: true,
                    pinned: 'left',
                    headerComponentParams: { menuIcon: 'fa-external-link-alt' },
                },
                {
                    headerComponentParams: { menuIcon: 'fa-cog' },
                    field: 'medals.gold', resizable: true,
                    width: 240,
                    minWidth: 240,
                },
                { field: 'medals.silver', resizable: true },
                {
                    field: 'medals.bronze', resizable: true
                },
            ]
        }];

    const defaultColDef = useMemo(() => {
        return {
            width: 350,
            sortable: true,
            resizable: true,
            filter: true,
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
