import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calculation",
  initialState: {
    powerConsumption: 0,
    list: [],
    energyPrice: null,
  },

  reducers: {
    addPowerConsumption: (state, action) => {
      state.powerConsumption += action.payload;
    },
    addPrice: (state, action) => {
      state.energyPrice = action.payload;
    },
    addList: (state, action) => {
      // if (!state.list.map((el) => el.id).includes(action.payload.id)) {
      state.list.push(action.payload);
      // }
      // state.list.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPowerConsumption, addList, addPrice } = calcSlice.actions;
export const selectorCalc = (state) => state.calculation;

export default calcSlice.reducer;
