import React, { useState } from 'react'

import { Tab, Tooltip } from '@mui/material'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import Box from '@mui/material/Box'
import Calculation from './calculation/Calculation'
import Compare from './compare/Compare'
import Contact from './contact/Contact'

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState('1')

  const handleChange = (e, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={selectedTab}>
        <TabList onChange={handleChange}>
          <Tooltip
            title="calculate the electricity consumption of the device"
            placement="left"
          >
            <Tab label="Calculation" value="1"></Tab>
          </Tooltip>
          <Tooltip
            title="compare electrical appliances by price and monthly and annual
            electricity consumption"
            placement="bottom"
          >
            <Tab label="Compare" value="2"></Tab>
          </Tooltip>
          <Tooltip title="Contact us" placement="right">
            <Tab label="Contact" value="3"></Tab>
          </Tooltip>
        </TabList>
        <TabPanel value="1">
          <Calculation />
        </TabPanel>
        <TabPanel value="2">
          <Compare />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3">
          <Contact />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
