import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { generateClient } from "aws-amplify/data";
import { MdModeEditOutline } from "react-icons/md";
import type { Schema } from "../../../amplify/data/resource";
const client = generateClient<Schema>();
import type { ColDef } from "ag-grid-community";

function OrdersTable() {
  const navigate = useNavigate();
  const [skips, setSkips] = useState<Array<Schema["Skip"]["type"]>>([]);
   const [columnDefs] = useState<ColDef[]>([
      { headerName: "Name", field: "name", filter: true, sortable: true, sort: "asc", sortIndex: 0 },
      { headerName: "Location", field: "location", filter: true, sortable: true },
      { headerName: "Volume", field: "volume", filter: true, sortable: true },
      { headerName: "Size", field: "size", filter: true, sortable: true },
      { headerName: "Price", field: "price", filter: true, sortable: true },
      {
        headerName: "Actions",
        field: "id",
        cellRenderer: (params) => (
          <button style={{ height: "40px", margin: "4px 4px" }} onClick={() => navigate(`/forms/${params.value}`)}>
            <MdModeEditOutline />
          </button>
        ),
      },
    ]);


  useEffect(() => {
    client.models.Skip.observeQuery().subscribe({
      next: (data) => setSkips([...data.items]),
    });
  }, []);

    const onGridReady = (params) => {
      params.api.sizeColumnsToFit();
      gridApi = params.api;
    };

  let gridApi;
  const exportToExcel = () => {
    gridApi.exportDataAsExcel();
  };
  return (
   <div>
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={skips}
        columnDefs={columnDefs}
        rowHeight={50} // Adjust the row height as needed
        onGridReady={onGridReady}
        pagination={true}
      />
    </div>
      </div>
  );
}

export default OrdersTable;