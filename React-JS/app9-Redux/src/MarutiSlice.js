import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marutiCount: 0,
};

export const marutisCountSlice = createSlice({
  name: "marutisCounter",

  initialState,

  reducers: {
    marutiPriceIncrement: (store) => {
      store.marutiCount++;
    },
    marutiPriceDecrement: (store) => {
      store.marutiCount--;
    },
    marutiPriceReset: (store) => {
      store.marutiCount = 0;
    },
  },
});

export const { marutiPriceIncrement, marutiPriceDecrement, marutiPriceReset } =
  marutisCountSlice.actions;
export default marutisCountSlice.reducer;
