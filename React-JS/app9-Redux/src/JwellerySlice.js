import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwelleryCount: 0,
};

export const jwelleryCountSlice = createSlice({
  name: "jwelleryCounter",

  initialState,

  reducers: {
    jwelleryIncrement: (store) => {
      store.jwelleryCount++;
    },

    jwelleryDecrement: (store) => {
      store.jwelleryCount--;
    },

    jwelleryReset: (store) => {
      store.jwelleryCount = 0;
    },
  },
});

export const { jwelleryIncrement, jwelleryDecrement, jwelleryReset } =
  jwelleryCountSlice.actions;
export default jwelleryCountSlice.reducer;
