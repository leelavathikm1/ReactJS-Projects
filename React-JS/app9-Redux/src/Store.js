import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import hoverSlice from "./HoverSlice";
import salaryCounterSlice from "./SalarySlice";
import jwelleryCountSlice from "./JwellerySlice";
import bikeCounterSlice from "./BikeSlice";
import marutisCountSlice from "./MarutiSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    hoverCounter: hoverSlice,
    salaryCounter: salaryCounterSlice,
    jwelleryCounter: jwelleryCountSlice,
    bikeCounter: bikeCounterSlice,
    marutisCounter: marutisCountSlice,
  },
});
