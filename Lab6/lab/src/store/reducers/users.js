import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
  const data = await axios.get("https://randomuser.me/api/?results=10");

  return data.data.results;
});


export const usersReducer = createSlice({
  name: "users",
  initialState: {
    usersData: [],
    initialLoading: false,
  },

  reducers: {},

  extraReducers: {
    [getUsersData.fulfilled]: (state, action) => {
      state.usersData = action.payload;
      state.initialLoading = false;
    },

    [getUsersData.pending]: (state) => {
      state.usersData = [];
      state.initialLoading = true;
    },
  },
});

export default usersReducer.reducer;
