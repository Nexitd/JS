import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },

  reducers: {
    registrateUser: (state, action) => {
      const { loginData, passwordData } = action.payload;

      state.isAuth = true;
      localStorage.setItem("login", loginData);
      localStorage.setItem("password", passwordData);
    },
  },
});

export const { registrateUser } = authReducer.actions;

export default authReducer.reducer;
