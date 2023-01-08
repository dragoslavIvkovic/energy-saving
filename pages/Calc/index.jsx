import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addList } from "../../store/slice/calcSlice";
import TableData from "./TableData";
import styles from "../../styles/Elements.module.css";
import ArrowIcon from "../../components/ArrowIcon";
import { formatToCurrency } from "../../components/CurrncyFormat";

export default function Index() {
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
      deviceName,
      energyPrice,
      hoursPerDay,
      daysPerMonth,
      energyConsumption,
      energySum: Number(energyConsumption * hoursPerDay * daysPerMonth).toFixed(
        2
      ),
      // priceSum: formatToCurrency(
      //   energyConsumption *  hoursPerDay * daysPerMonth
      // ),
      priceOfMonthlyConsumption: formatToCurrency(
        energyConsumption * energyPrice * hoursPerDay * daysPerMonth
      ),
      annualConsumptionPrice: formatToCurrency(
        energyConsumption * hoursPerDay * daysPerMonth * energyPrice * 12
      ),
    };

    if (deviceName) {
      dispatch(addList(dataListObject));
    }

    hoursPerDayRef.current.value = "";
    energyConsumptionRef.current.value = "";
    daysPerMonthRef.current.value = "";
    deviceNameRef.current.value = "";
  };

 

  return (
    <div className={styles.container}>
      <div className={styles.calc}>
        <input
          ref={deviceNameRef}
          type="text"
          placeholder="device name"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon />
        <input
          ref={energyConsumptionRef}
          type="number"
          placeholder="kwh"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon />
        <input
          ref={energyPriceRef}
          type="number"
          placeholder="energy price"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />{" "}
        <ArrowIcon />
        <input
          ref={hoursPerDayRef}
          type="number"
          placeholder="hours per day"
          variant="outlined"
          size="small"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon />
        <input
          ref={daysPerMonthRef}
          type="number"
          title="This is a tooltip"
          placeholder="days per month"
          className={styles.inputTooltip}
        />
        <ArrowIcon />
        <button onClick={onSubmit}>Submit</button>
      </div>

      <div>
        <TableData />
      </div>
    </div>
  );
}
