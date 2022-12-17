import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import styles from "../../styles/Elements.module.css";

export default function Chart() {
  const listData = useSelector((state) => state.compare.list);

  const data = listData.map((datas) => datas);

  return (
    <div className={styles.chart}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="deviceName" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="priceOfMonthlyConsumption" stackId="a" fill="#05b7fb" />
        <Bar dataKey="monthlySum" stackId="a" fill="#f5a519" />
      </BarChart>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="deviceName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="devicePrice" stackId="a" fill="#05b7fb" />
        <Bar dataKey="yearlySum" stackId="a" fill="#f5a519" />
      </BarChart>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="deviceName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="devicePrice" stackId="a" fill="#05b7fb" />
        <Bar dataKey="yearlySum" stackId="a" fill="#f5a519" />
        <Bar dataKey="annualConsumptionPrice" stackId="a" fill="#05b7fb" />
      </BarChart>
    </div>
  );
}
