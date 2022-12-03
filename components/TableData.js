import React  from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";
import { removeList } from "../store/slice/calcSlice";



const columns = [
  {
    field: "deviceName",
    headerName: " device name",
    width: 110,
    editable: true,
  },
  {
    field: "energyPrice",
    headerName: " energy price",
    width: 110,
    editable: true,
  },

  {
    field: "hoursPerDay",
    headerName: " hours per day",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "daysPerMonth",
    headerName: " days in month",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "energyConsumption",
    headerName: " energy consumption",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "energySum",
    headerName: " energy sum",
    sortable: false,
    width: 110,
    valueGetter: (params) =>
      `${params.row.hoursPerDay || ""} ${params.row.hoursPerDay || ""}`,
  },
  {
    field: "priceSum",
    headerName: " price sum",
     sortable: false,
    width: 110,
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
      <Button
        sx={{ width: "7vw", fontSize: "10px" }}
        variant="contained"
        size="small"
        onClick={() => downloadExcel()}
      >
        Download Data
      </Button>
      <DataGrid
        sx={{
          
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
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
