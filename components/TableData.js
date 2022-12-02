import React  from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";




const columns = [
  {
    field: "deviceName",
    headerName: "deviceName",
    width: 150,
    editable: true,
  },
  {
    field: "energyPrice",
    headerName: "energyPrice",
    width: 150,
    editable: true,
  },
  
  {
    field: "daysPerMonth",
    headerName: "daysPerMonth",
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
    field: "hoursPerDay",
    headerName: "hoursPerDay",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.hoursPerDay || ""} ${params.row.hoursPerDay || ""}`,
  },
  {
    field: "sum",
    headerName: "sum",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.hoursPerDay || ""} ${params.row.hoursPerDay || ""}`,
  },
];

export default function TableData() {
 


  const listData = useSelector((state) => state.calculation.list);
const downloadExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(listData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workbook, "DataSheet.xlsx");
};

  
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <button onClick={() => downloadExcel()}>Download As Excel</button>
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
