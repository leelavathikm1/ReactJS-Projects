import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import hoverSlice from "./HoverSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    hoverCounter: hoverSlice,
  },
});
