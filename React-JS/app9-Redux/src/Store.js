import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import { hoverCountSlice } from "./HoverSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    hoverCountSlice,
  },
});
