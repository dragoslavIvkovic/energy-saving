/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addPowerConsumption,
  addList,
  addPrice,
} from "../store/slice/calcSlice";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });
const TableData = dynamic(() => import("../components/TableData"), {
  ssr: false,
});

export default function Compare() {
  const dispatch = useDispatch();
  // const listData = useSelector((state) => state.calculation.list);
  // const priceRedux = useSelector((state) => state.calculation.price);

  const devicePriceRef = useRef(null);
  const priceRef = useRef(null);
  const hoursRef = useRef(null);
  const daysRef = useRef(null);
  const daysPerMonthRef = useRef(null);
  const deviceNameRef = useRef("");

  // console.log("listData", listData);
  // console.log("priceRedux", priceRedux);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    const hours = hoursRef.current.value;
    const price = priceRef.current.value;
    const devicePrice = devicePriceRef.current.value;
    const days = daysRef.current.value;
    const perMonth = daysPerMonthRef.current.value;
    const deviceName = deviceNameRef.current.value;
    const dataListObject = {
      id: uuidv4(),
      deviceName: deviceName,
      price: price,
      devicePrice: devicePrice,
      days: days,
      hours: hours,
      perMonth: perMonth,
      energySum: Number(days * hours * priceRef),
      priceSum: Number(days * hours * priceRef * perMonth),
    };

    if (deviceName) {
      dispatch(addList(dataListObject));
    }

    // e.target.reset();
    hoursRef.current.value = "";
    daysRef.current.value = "";
    hoursRef.current.value = "";
    deviceNameRef.current.value = "";
  };

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <TextField
          inputRef={deviceNameRef}
          type="text"
          id="outlined-basic"
          label="device name"
          variant="outlined"
        />

        <TextField
          inputRef={devicePriceRef}
          type="number"
          id="outlined-basic"
          label="device price"
          variant="outlined"
        />
        <TextField
          inputRef={priceRef}
          type="number"
          id="outlined-basic"
          label="energy price"
          variant="outlined"
        />

        <TextField
          inputRef={hoursRef}
          type="number"
          id="outlined-basic"
          label="power kwh"
          variant="outlined"
        />

        <TextField
          inputRef={daysRef}
          type="number"
          id="outlined-basic"
          label="hours per day"
          variant="outlined"
        />

        <TextField
          inputRef={daysPerMonthRef}
          type="number"
          id="outlined-basic"
          label="days per month"
          variant="outlined"
        />

        <button onClick={onSubmit} className="btn-submit">
          Submit
        </button>
      </Grid>
      <Grid>
        <Chart />
      </Grid>
    </Grid>
  );
}
