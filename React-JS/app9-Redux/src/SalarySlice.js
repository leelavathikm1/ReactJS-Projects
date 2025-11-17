import { createSlice } from "@reduxjs/toolkit";
import reducer from "./CounterSlice";

const initialState = {
  salaryCount: 0,
};
export const salaryCounterSlice = createSlice({
  name: "salaryCounter",

  initialState,

  reducers: {
    salaryIncrement: (store) => {
      store.salaryCount++;
    },

    salaryDecrement: (store) => {
      store.salaryCount--;
    },

    salaryReset: (store) => {
      store.salaryCount = 0;
    },
  },
});

export const { salaryIncrement, salaryDecrement, salaryReset } =
  salaryCounterSlice.actions;
export default salaryCounterSlice.reducer;
