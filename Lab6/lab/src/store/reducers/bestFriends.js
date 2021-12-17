import { createSlice } from "@reduxjs/toolkit";

export const bestFriends = createSlice({
  name: "friends",
  initialState: {
    friendsArr: [],
    isInList: false,
    inFriendList: false,
  },

  reducers: {
    getFriends: (state) => {
      return state.friendsArr;
    },

    addToFriendList: (state, object) => {
      state.friendsArr.push(object.payload);
    },

    removeFriends: (state, obj) => {
      state.friendsArr.forEach((el, index) => {
        if (
          el.name.first === obj.payload.name.first &&
          el.name.last === obj.payload.name.last
        ) {
          state.friendsArr.splice(index, 1);
        }
      });
    },

    checkIsInList: (state, obj) => {
      state.friendsArr.forEach((el) => {
        if (
          el.name.first === obj.payload.name.first &&
          el.name.last === obj.payload.name.last
        ) {
          state.inList = true;
          state.inFriendList = true;
        } else {
          state.inList = false;
          state.inFriendList = false;
        }
      });
    },
  },
});

export const { addToFriendList, checkIsInList, getFriends, removeFriends } =
  bestFriends.actions;

export default bestFriends.reducer;




