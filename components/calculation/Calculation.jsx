import React, { useRef, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Tooltip from '@mui/material/Tooltip';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import {
  addList,
} from '../../store/slice/calcSlice';
import TableData from './TableData';
 

export default function Calculation() {
  const [hourValue, setHoursValue] = useState();
  const [daysPerMonthValue, setDaysPerMonthValue] = useState();
  const dispatch = useDispatch();

  const energyPriceRef = useRef(null);
  const hoursPerDayRef = useRef(null);
  const daysPerMonthRef = useRef(null);
  const energyConsumptionRef = useRef(null);
  const deviceNameRef = useRef('');

  const onSubmit = () => {
    const hoursPerDay = hoursPerDayRef.current.value;
    const energyConsumption = energyConsumptionRef.current.value;
    const energyPrice = energyPriceRef.current.value;
    const daysPerMonth = daysPerMonthRef.current.value;
    const deviceName = deviceNameRef.current.value;
    const dataListObject = {
      id: uuidv4(),
      deviceName,
      energyPrice,
      hoursPerDay,
      daysPerMonth,
      energyConsumption,
      energySum: Number(energyConsumption * hoursPerDay * daysPerMonth).toFixed(
        2
      ),
      monthlyPriceOfEnergyUsed: Number(
        energyPrice * hoursPerDay * daysPerMonth
      ).toFixed(2),
      yearlyPriceOfEnergyUsed: Number(
        energyConsumption * hoursPerDay * daysPerMonth * energyPrice * 12
      ).toFixed(2),
    };

    if (deviceName) {
      dispatch(addList(dataListObject));
    }

    hoursPerDayRef.current.value = '';
    energyConsumptionRef.current.value = '';

    daysPerMonthRef.current.value = '';
    deviceNameRef.current.value = '';
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
            value={daysPerMonthValue || ''}
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

      <Grid>
        <TableData />
      </Grid>
    </Grid>
  );
}
