/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, TextField, Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addListCompare } from "../store/slice/compareSlice";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const Chart = dynamic(() => import("../components/Chart"), { ssr: false });
const TableData = dynamic(() => import("../components/TableData"), {
  ssr: false,
});

export default function Compare() {
  const [hourValue, setHoursValue] = useState();
  const [daysPerMonthValue, setDaysPerMonthValue] = useState();
  const dispatch = useDispatch();
  const devicePriceRef = useRef(null);
  const energyPriceRef = useRef(null);
  const hoursPerDayRef = useRef(null);
  const daysPerMonthRef = useRef(null);
  const energyConsumptionRef = useRef(null);
  const deviceNameRef = useRef("");

  const onSubmit = () => {
    const hoursPerDay = hoursPerDayRef.current.value;
    const energyPrice = energyPriceRef.current.value;
    const devicePrice = devicePriceRef.current.value;
    const energyConsumption = energyConsumptionRef.current.value;
    const daysPerMonth = daysPerMonthRef.current.value;
    const deviceName = deviceNameRef.current.value;
    const dataListObject = {
      id: uuidv4(),
      deviceName: deviceName,
      energyPrice: energyPrice,
      energyConsumption: energyConsumption,
      devicePrice: devicePrice,
      hoursPerDay: hoursPerDay,
      daysPerMonth: daysPerMonth,
      energySum: Number(energyConsumption * hoursPerDay * daysPerMonth),
      priceSum: Number(
        energyConsumption * hoursPerDay * daysPerMonth * energyPrice
      ),
      sum: Number(
        energyConsumption * hoursPerDay * daysPerMonth * energyPrice +
          devicePrice
      ),
    };

    if (deviceName) {
      dispatch(addListCompare(dataListObject));
    }

    // e.target.reset();
   hoursPerDayRef.current.value = ""
    
    devicePriceRef.current.value = "";
     energyConsumptionRef.current.value = "";
    daysPerMonthRef.current.value = "";
    deviceNameRef.current.value = "";
  };

  const minhours = 1;
  const maxhours = 24;
  const mindays = 1;
  const maxdays = 30;

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: 3 }}
      >
        <Tooltip title="enter the name of the device">
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
        <Tooltip title="enter the purchase price of the device">
          <TextField
            inputRef={devicePriceRef}
            type="number"
            id="outlined-basic"
            label="device price"
            variant="outlined"
            size="small"
          />
        </Tooltip>
        <DoubleArrowIcon />
        <Tooltip title="enter the price of electricity">
          <TextField
            inputRef={energyPriceRef}
            type="number"
            id="outlined-basic"
            label="energy price"
            variant="outlined"
            size="small"
          />
        </Tooltip>
        <DoubleArrowIcon />
        <Tooltip title="enter how much electricity the device consumes">
          <TextField
            inputRef={energyConsumptionRef}
            type="number"
            id="outlined-basic"
            label="kwh"
            variant="outlined"
            size="small"
          />
        </Tooltip>
        <DoubleArrowIcon />
        <Tooltip title="enter how many hours the electrical device operates in a day">
          <TextField
            inputRef={hoursPerDayRef}
            type="number"
            id="outlined-basic"
            label="hours per day"
            variant="outlined"
            size="small"
            value={hourValue || ''}
            inputProps={{ minhours, maxhours }}
            onChange={(e) => {
              var value = parseInt(e.target.value);
              if (value > maxhours) value = maxhours;
              if (value < minhours) value = minhours;
              setHoursValue(value);
            }}
          />
        </Tooltip>
        <DoubleArrowIcon />
        <Tooltip title="enter how many days the electrical appliance operates in a month">
          <TextField
            inputRef={daysPerMonthRef}
            type="number"
            id="outlined-basic"
            label="days in month"
            variant="outlined"
            size="small"
            value={daysPerMonthValue || ''}
            inputProps={{ mindays, maxdays }}
            onChange={(e) => {
              var value = parseInt(e.target.value);
              if (value > maxdays) value = maxdays;
              if (value < mindays) value = mindays;
              setDaysPerMonthValue(value);
            }}
          />
        </Tooltip>
        <DoubleArrowIcon />

        <Button onClick={onSubmit}>Submit</Button>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Chart />
      </Grid>
    </Grid>
  );
}
