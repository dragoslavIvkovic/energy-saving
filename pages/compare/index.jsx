import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addListCompare } from "../../store/slice/compareSlice";
import Chart from "./Chart";
import styles from "../../styles/Elements.module.css";
import ArrowIcon from "../../components/ArrowIcon";
import { formatToCurrency } from "../../components/CurrncyFormat";

export default function Compare() {
 
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
    const energySum =
      Number(energyConsumption * hoursPerDay * daysPerMonth).toFixed(2) +
      " kWh"; ;
    const priceSum = formatToCurrency(
      energyConsumption * energyPrice * (hoursPerDay * daysPerMonth)
    );
    const priceOfMonthlyConsumption = formatToCurrency(
      priceSum * daysPerMonth
    );
    const monthlySum = Number(devicePrice) + Number(priceOfMonthlyConsumption);
    const annualConsumptionPrice = formatToCurrency(Number(
      priceOfMonthlyConsumption * 12
    ));
    const yearlySum =
      Number(devicePrice + annualConsumptionPrice).toFixed(2) 
      +" kWh";

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
      priceOfMonthlyConsumption,
      monthlySum,
      annualConsumptionPrice,
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

  return (
    <div className={styles.container}>
      <div className={styles.compare}>
        <input
          ref={deviceNameRef}
          type="text"
          placeholder="device name"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <input
          ref={devicePriceRef}
          type="number"
          placeholder="device price"
          title="enter the purchase price of the device"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <input
          ref={energyPriceRef}
          type="number"
          placeholder="energy price"
          title="enter the price of electricity"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <input
          ref={energyConsumptionRef}
          type="number"
          placeholder="kwh"
          title="enter the purchase price of the device"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <input
          ref={hoursPerDayRef}
          type="number"
          placeholder="hours per day"
          title="enter the purchase price of the device"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <input
          ref={daysPerMonthRef}
          type="number"
          placeholder="days in month"
          variant="outlined"
          title="enter the purchase price of the device"
          className={styles.inputTooltip}
        />
        <ArrowIcon />

        <button onClick={onSubmit}>Submit</button>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}
