import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line import/prefer-default-export
import calcSlice from "./slice/calcSlice";
import compareSlice from "./slice/compareSlice";

const store = configureStore({
  reducer: {
    calculation: calcSlice,
    compare: compareSlice,
  },
});

export default store;
