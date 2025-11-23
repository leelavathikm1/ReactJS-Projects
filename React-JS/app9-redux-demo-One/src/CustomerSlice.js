import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "../../app9-redux-demo/src/counterSlice";

const initialState = {
  count: 0,
};
export const customerSlice = createSlice({
  name: "counter",
  reducers: {
    counter: customerSlice,
  },
});

export const {} = customerSlice.actions;
export default customerSlice.reducer;
