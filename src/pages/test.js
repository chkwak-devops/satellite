import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import styles from "@/styles/Home.module.css";

import {
  Icon,
  Dropdown,
  Button,
  Header,
  Divider,
  Image,
} from "semantic-ui-react";

import { AgGridReact } from "ag-grid-react";

const gridOptions = {
  columnDefs: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ],
};

const TestMenu = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          borderWidth: 1,
          borderStyle: "dashed",
        }}
      >
        <div
          style={{
            fontSize: 20,
            paddingBottom: 10,
            width: "100%",
            border: "1px dashed yellow",
            fontWeight: "bold",
          }}
        >
          <Icon name="angle right" />
          포트폴리오 대시보드
        </div>

        <div
          style={{
            fontSize: 20,
            width: "100%",
            height: 400,
            fontWeight: "bold",
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          {/* <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" /> */}
        </div>

        <div
          className="ag-theme-alpine"
          style={{
            width: "100%",
            height: 500,
            borderWidth: 1,
            borderStyle: "dashed",
          }}
        >
          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          />
        </div>
      </div>
    </>
  );
};

export default TestMenu;
