import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoverCount: 0,
};

export const hoverSlice = createSlice({
  name: "HoverCounter",
  initialState, // 👉 place it here
  reducers: {
    hoverIncrement: (store) => {
      console.log("hoverIncrement Called !!");
      store.hoverCount++;
    },
    hoverDecrement: (store) => {
      store.hoverCount--;
    },
    hoverReset: (store) => {
      store.hoverCount = 0;
    },
  },
});

export const { hoverIncrement, hoverDecrement, hoverReset } =
  hoverSlice.actions;

export default hoverSlice.reducer;
