import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import * as XLSX from "xlsx";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeList } from "../../store/slice/calcSlice";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TableData() {
  const dispatch = useDispatch();

  const listData = useSelector((state) => state.calculation.list);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(listData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  // const TableData = () => {
  //   return listData.map((data, index) => {
  //     const {
  //       id,
  //       deviceName,
  //       energyPrice,
  //       hoursPerDay,
  //       daysPerMonth,
  //       energyConsumption,
  //       energySum,
  //       priceSum,
  //     } = data; //destructuring
  //     return (
  //       <tr key={id}>
  //         <td>{deviceName}</td>
  //         <td>{energyPrice}</td>
  //         <td>{hoursPerDay}</td>
  //         <td>{daysPerMonth}</td>
  //         <td>{energyConsumption}</td>
  //         <td>{energySum}</td>
  //         <td>{priceSum}</td>
  //         <td onClick={() => dispatch(removeList(id))}>delate</td>
  //       </tr>
  //     );
  //   });
  // }

  const RemoveRow = (id) => {
    return dispatch(removeList(id));
  };

  let isObjectEmpty = Object.keys(listData).length === 0;

  return (
    <Box sx={{ height: 400, width: "100%", margin: "0 0 2vh 0" }}>
      <Button
        sx={{ width: "7vw", fontSize: "10px", marginBottom: "2vh" }}
        variant="contained"
        size="small"
        onClick={() => downloadExcel()}
      >
        Download Data
      </Button>

      {!isObjectEmpty &&
        <table>
        <thead>
          <tr>
            <th>device</th>
            <th>energy price</th>
            <th>hours per day</th>
            <th>days per month</th>
            <th>kwh</th>
            <th>energy Sum</th>
            <th>€</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((row) => (
            <tr key={row.id}>
              <td>{row.deviceName}</td>
              <td>{row.energyPrice}</td>
              <td>{row.hoursPerDay}</td>
              <td>{row.daysPerMonth}</td>
              <td>{row.energyConsumption}</td>
              <td>{row.energySum}</td>
              <td>{row.priceSum}</td>
              <td onClick={() => RemoveRow(row.id)}>
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </Box>
  );
}
