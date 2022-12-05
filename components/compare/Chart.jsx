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

export default function Chart() {
  const listData = useSelector((state) => state.compare.list);

  const data = listData.map((datas) => datas);

  return (
    <>
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
        <Bar dataKey="devicePrice" stackId="a" fill="#8884d8" />
        <Bar dataKey="monthlyPriceOfEnergyUsed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="monthlySum" stackId="a" fill="#82ca9d" />
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
        <Bar dataKey="devicePrice" stackId="a" fill="#8884d8" />
        <Bar dataKey="yearlySum" stackId="a" fill="#82ca9d" />

        <Bar dataKey="yearlyPriceOfEnergyUsed" stackId="a" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
