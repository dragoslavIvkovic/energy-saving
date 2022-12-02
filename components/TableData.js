import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "deviceName",
    headerName: "deviceName",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "price",
    width: 150,
    editable: true,
  },
  {
    field: "days",
    headerName: "days",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "perMonth",
    headerName: "perMonth",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "energySum",
    headerName: "energySum",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "priceSum",
    headerName: "priceSum",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "hours",
    headerName: "hours",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.hours || ""} ${params.row.hours || ""}`,
  },
];

export default function TableData() {
  const listData = useSelector((state) => state.calculation.list);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={listData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
