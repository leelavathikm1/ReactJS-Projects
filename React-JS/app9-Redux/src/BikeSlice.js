import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bikeCount: 0,
};

export const bikeCounterSlice = createSlice({
  name: "bikeCounter",

  initialState,
  reducers: {
    bikeIncrement: (store) => {
      store.bikeCount++;
    },
    bikeDecrement: (store) => {
      store.bikeCount--;
    },
    bikereset: (store) => {
      store.bikeCount = 0;
    },
  },
});

export const { bikeIncrement, bikeDecrement, bikereset } =
  bikeCounterSlice.actions;
export default bikeCounterSlice.reducer;
