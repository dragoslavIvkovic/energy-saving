import React, { useRef, useState } from "react";
import { Button, Grid, TextField, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { addListCompare } from "../../store/slice/compareSlice";

const Chart = dynamic(() => import("./Chart.jsx"), { ssr: false });

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
    const energySum = Number(
      energyConsumption * hoursPerDay * daysPerMonth
    ).toFixed(2);
    const priceSum = Number(
      energyConsumption * energyPrice * (hoursPerDay * daysPerMonth)
    ).toFixed(2);
    const monthlyPriceOfEnergyUsed = Number(priceSum * daysPerMonth).toFixed(2);
    const monthlySum = Number(devicePrice) + Number(monthlyPriceOfEnergyUsed);
    const yearlyPriceOfEnergyUsed = Number(
      monthlyPriceOfEnergyUsed * 12
    ).toFixed(2);
    const yearlySum = (
      Number(devicePrice) + Number(yearlyPriceOfEnergyUsed)
    ).toFixed(2);

    const dataListObject = {
      id: uuidv4(),
      deviceName,
      energyPrice,
      energyConsumption,
      devicePrice,
      hoursPerDay,
      daysPerMonth,
      energySum,
      priceSum,
      monthlyPriceOfEnergyUsed,
      monthlySum,
      yearlyPriceOfEnergyUsed,
      yearlySum,
    };

    if (deviceName) {
      dispatch(addListCompare(dataListObject));
    }
    hoursPerDayRef.current.value = "";
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
            value={hourValue || ""}
            inputProps={{ minhours, maxhours }}
            onChange={(e) => {
              let value = parseInt(e.target.value, 10);
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
            value={daysPerMonthValue || ""}
            inputProps={{ mindays, maxdays }}
            onChange={(e) => {
              let value = parseInt(e.target.value, 10);
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
