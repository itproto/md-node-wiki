const myTheme = themeQuartz
  .withPart(colorSchemeDarkBlue)
  .withParams({
    accentColor: "#E70F1F",
    backgroundColor: "#081628",
    chromeBackgroundColor: "#182839",
    browserColorScheme: "dark",

    fontFamily: "Roboto",
    fontSize: 11,
    foregroundColor: "#FFFFFF",

    headerFontSize: 14,
    headerFontWeight: "600",
    headerBackgroundColor: "#0C2236",
    headerForegroundColor: "#FFFFFF",

    oddRowBackgroundColor: "#0E2A44",
    evenRowBackgroundColor: "#081628",

    rowBorderColor: "#24384F",
    rowBorderWidth: 1,
  });


const colDefs: ColDef[] = [
  {
    field: "ccy",
    headerName: "CCY",
    width: 50,
  },
  {
    field: "description",
    headerName: "Event",
    width: 250,
  },
  {
    field: "startDate",
    headerName: "Start",
    width: 120,
    valueFormatter: p => p.value.format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "endDate",
    headerName: "End",
    width: 120,
    valueFormatter: p => p.value.format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "weight",
    headerName: "Weight",
    width: 90,
    valueFormatter: p => Number(p.value).toFixed(2),
    cellClassRules: {
      "bg-red-800/40": p => Number(p.value) > 7.2,
      "bg-red-500/20": p => Number(p.value) > 7.1 && Number(p.value) <= 7.2,
    },
  },
  {
    field: "eventType",
    headerName: "Event Type",
    width: 130,
  },
];


AgGridReact
  rowData={data}
  columnDefs={colDefs}
  theme={myTheme}
  domLayout="autoHeight"
/>
