import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line import/prefer-default-export
import calcSlice from "./slice/calcSlice";

const store = configureStore({
  reducer: {
    calculation: calcSlice,
  },
});

export default store;
