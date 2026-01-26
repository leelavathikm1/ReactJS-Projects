import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
const API_URL = "http://localhost:3000/users/";

export const createUserAsyncAction = createAsyncThunk(
  "users/createUserAsync",
  async (user) => {
    const responce = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await responce.json;
  },
);

export const getAllUserAsyncAction = createAsyncThunk(
  "users/getAllUserAsync",
  async () => {
    console.log("getAllUserasync Is Called");
    const responce = await fetch(API_URL);
    return responce.json();
  },
);

export const updateUsersAsyncAction = createAsyncThunk(
  "users/updateUsersAsync",
  async (user) => {
    console.log("handleUpdate called in slice");

    const responce = await fetch(API_URL + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    return responce.json();
  },
);

export const deleteUserAsyncAction = createAsyncThunk(
  "users/deleteUserAsyncAction",
  async (user) => {
    const responce = await fetch(API_URL + user.id, {
      method: "DELETE",
    });
    return user.id;
  },
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
      state.users = state.users.filter((usr) => usr.id !== action.payload);
    });

    builder.addCase(createUserAsyncAction.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });

    builder.addCase(updateUsersAsyncAction.fulfilled, (state, action) => {
      const updateUsersAsync = action.payload;
      const index = state.users.findIndex((res) => res.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    });
  },
});

export default userSlice.reducer;
