import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine-dark.css";

export default function VolSurfaceGrid() {
  const columnDefs = [
    { headerName: "Expiry", field: "expiry", pinned: "left", width: 140 },
    { headerName: "Foo", field: "foo", width: 80 },
    { headerName: "Smooth", field: "smooth", width: 80 },
    {
      headerName: "Broker Foo",
      children: [
        { headerName: "TRAD", field: "trad", width: 90 },
        { headerName: "BGC", field: "bgc", width: 90 },
      ],
    },
    { headerName: "Shadow Foo", field: "shadow", width: 100 },
    { headerName: "25d RR", field: "rr25", width: 90 },
    { headerName: "25d Fly", field: "fly25", width: 90 },
    { headerName: "10 Fly", field: "fly10", width: 90 },
    { headerName: "α", field: "alpha", width: 70 },
    { headerName: "β", field: "beta", width: 70 },
    { headerName: "Mix Wt", field: "mix", width: 80 },
    { headerName: "Sdv MixW", field: "sdv", width: 90 },
  ];

  const rowData = [
    {
      expiry: "ON",
      foo: 6.67,
      smooth: 6.63,
      trad: 6.35,
      bgc: 7.10,
      shadow: 6.9,
      rr25: 0.0,
      fly25: 0.15,
      fly10: 0.63,
      alpha: 0.7,
      beta: -0.5,
      mix: 84.0,
      sdv: 84.0,
    },
    {
      expiry: "1W",
      foo: 6.43,
      smooth: 6.42,
      trad: 6.02,
      bgc: 7.22,
      shadow: 6.8,
      rr25: 0.2,
      fly25: 0.15,
      fly10: 0.53,
      alpha: 0.7,
      beta: -0.5,
      mix: 84.0,
      sdv: 84.0,
    },
  ];

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: "500px", width: "100%", fontSize: "13px" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{
          resizable: true,
          sortable: false,
          filter: false,
          cellClass: "text-sm",
          cellStyle: { textAlign: "right" },
        }}
      />
    </div>
  );
}
