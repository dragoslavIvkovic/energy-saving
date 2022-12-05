import React, { useState } from "react";

import { Tab } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Calculation from "./calculation/Calculation";
import Compare from "./compare/Compare";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={selectedTab} >
        <TabList onChange={handleChange} >
          <Tab label="Calculation" value="1"></Tab>
          <Tab label="Compare" value="2"></Tab>
          <Tab label="Closable" value="3"></Tab>
        </TabList>
        <TabPanel value="1">
          <Calculation />
        </TabPanel>
        <TabPanel value="2">
          <Compare />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
}
