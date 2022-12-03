/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addPowerConsumption,
  addList,
  addPrice,
} from "../store/slice/calcSlice";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Tooltip from "@mui/material/Tooltip";

import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });
const TableData = dynamic(() => import("../components/TableData"), {
  ssr: false,
});

export default function Calculation() {
  const [hourValue, setHoursValue] = useState();
  const [daysPerMonthValue, setDaysPerMonthValue] = useState();
  const dispatch = useDispatch();

  const energyPriceRef = useRef(null);
  const hoursPerDayRef = useRef(null);
  const daysPerMonthRef = useRef(null);
  const energyConsumptionRef = useRef(null);
  const deviceNameRef = useRef("");

  const onSubmit = () => {
    const hoursPerDay = hoursPerDayRef.current.value;
    const energyConsumption = energyConsumptionRef.current.value;
    const energyPrice = energyPriceRef.current.value;
    const daysPerMonth = daysPerMonthRef.current.value;
    const deviceName = deviceNameRef.current.value;
    const dataListObject = {
      id: uuidv4(),
      deviceName: deviceName,
      energyPrice: energyPrice,
      hoursPerDay: hoursPerDay,
      daysPerMonth: daysPerMonth,
      energyConsumption: energyConsumption,
      energySum: Number(energyConsumption * hoursPerDay * daysPerMonth),
      priceSum: Number(energyPrice * hoursPerDay * daysPerMonth),
    };

    if (deviceName) {
      dispatch(addList(dataListObject));
    }

    hoursPerDayRef.current.value = "";
    energyConsumptionRef.current.value = "";

    daysPerMonthRef.current.value = "";
    deviceNameRef.current.value = "";
  };

  const minHours = 1;
  const maxHours = 24;
  const minDays = 1;
  const maxDays = 30;

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: 3 }}
      >
        <Tooltip title="info o tome">
          <TextField
            inputRef={deviceNameRef}
            type="text"
            id="outlined-helperText"
            label="device name"
            variant="outlined"
            size="small"
          />
        </Tooltip>
        <DoubleArrowIcon />
        <TextField
          inputRef={energyPriceRef}
          type="number"
          id="outlined-basic"
          label="energy price"
          variant="outlined"
          size="small"
        />
        <DoubleArrowIcon />
        <TextField
          inputRef={energyConsumptionRef}
          type="number"
          id="outlined-basic"
          label="kwh"
          variant="outlined"
          size="small"
        />
        <DoubleArrowIcon />
        <TextField
          inputRef={hoursPerDayRef}
          type="number"
          id="outlined-basic"
          label="hours per day"
          variant="outlined"
          size="small"
          value={hourValue}
          inputProps={{ minHours, maxHours }}
          onChange={(e) => {
            var value = parseInt(e.target.value);
            if (value > maxHours) value = maxHours;
            if (value < minHours) value = minHours;
            setHoursValue(value);
          }}
        />
        <DoubleArrowIcon />
        <TextField
          inputRef={daysPerMonthRef}
          type="number"
          id="outlined-basic"
          label="days in month"
          variant="outlined"
          size="small"
          value={daysPerMonthValue}
          inputProps={{ minDays, maxDays }}
          onChange={(e) => {
            var value = parseInt(e.target.value);
            if (value > maxDays) value = maxDays;
            if (value < minDays) value = minDays;
            setDaysPerMonthValue(value);
          }}
        />
        <DoubleArrowIcon />

        <Button onClick={onSubmit}>Submit</Button>
      </Grid>

      <Grid>
        <TableData />
      </Grid>
    </Grid>
  );
}
