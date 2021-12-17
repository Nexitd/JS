import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bestFriends from "./reducers/bestFriends";
import usersReducer from "./reducers/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
    friends: bestFriends,
    auth: authReducer,
  },
});

export default store;
