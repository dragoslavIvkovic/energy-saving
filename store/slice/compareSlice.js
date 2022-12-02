import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: {
   
    list: [],
   
  },

  reducers: {
    
    addListCompare: (state, action) => {
      // if (!state.list.map((el) => el.id).includes(action.payload.id)) {
      state.list.push(action.payload);
      // }
      // state.list.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {   addListCompare  } = compareSlice.actions;
export const selectorCompare = (state) => state.compare;

export default compareSlice.reducer;
