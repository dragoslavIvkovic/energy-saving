import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addList } from "../../store/slice/calcSlice";
import TableData from "./TableData";
import styles from "../../styles/Elements.module.css";
import { MdDoubleArrow } from "react-icons/md";

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
          label="device name"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon/>

        <input
          ref={energyPriceRef}
          type="number"
          label="energy price"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />{" "}
        <ArrowIcon/>

        <input
          ref={energyConsumptionRef}
          type="number"
          label="kwh"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon/>

        <input
          ref={hoursPerDayRef}
          type="number"
          label="hours per day"
          variant="outlined"
          size="small"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon/>

        <input
          ref={daysPerMonthRef}
          type="number"
          title="This is a tooltip"
          className={styles.inputTooltip}
        />
        <ArrowIcon/>

        <button onClick={onSubmit}>Submit</button>
      </div>

      <div>
        <TableData />
      </div>
    </div>
  );
}
