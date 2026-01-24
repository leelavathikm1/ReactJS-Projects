import { configureStore } from "@reduxjs/toolkit";
import usersReduxer from "./UserSlice";

export const store = configureStore({
  reducer: {
    usersDetails: usersReduxer,
  },
});
