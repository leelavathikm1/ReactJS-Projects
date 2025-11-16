import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const hoverCountSlice = createSlice({
  name: "HoverCounter",
  reducers: {
    increment: (store) => {
      store.count++;
    },
    decrement: (store) => {
      store.count--;
    },
    reset: (store) => {
      store.count = 0;
    },
  },
  initialState: initialState,
});

export const { increment, decrement, reset } = hoverCountSlice.actions;
export default hoverCountSlice.reducer;
