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

import 'ag-grid-enterprise';
import { LicenseManager } from 'ag-grid-enterprise';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const licenseKey = "CompanyName=Equinix Asia Pacific pte ltd,LicensedGroup=equinixMendixPrivateLib,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=2,LicensedProductionInstancesCount=0,AssetReference=AG-027567,SupportServicesEnd=18_June_2023_[v2]_MTY4NzA0MjgwMDAwMA==4be2c388f9a8a7443c72842dff53d5b2"
LicenseManager.setLicenseKey(licenseKey);


// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';

const TablePage = () => {

    const gridRef = useRef();
    const [rowData, setRowData] = useState();


    const [columnDefs, setColumnDefs] = useState([
        { field: 'country', rowGroup: true, hide: true },
        { field: 'year', rowGroup: true, hide: true },
        { field: 'athlete' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            // resizable: true,
            // sortable: true,
        };
    }, []);

    const autoGroupColumnDef = useMemo(() => {
        return {
            minWidth: 200,
        };
    }, []);


    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
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
                        autoGroupColumnDef={autoGroupColumnDef}
                        groupDisplayType={'multipleColumns'}
                        onGridReady={onGridReady}
                    />




                </div>
            </div>
        </>
    );
};

export default TablePage;
