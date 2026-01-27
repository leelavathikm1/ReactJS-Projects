import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./UserSlice";

export const store = configureStore({
  reducer: {
    usersDetails: usersReduser,
  },
});
