import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      id: 1,
      image: "img/dev.gif",
      name: "Peter",
      email: "peter@gmail.com",
      phone: "08137204472",
    },
    {
      id: 2,
      image: "img/dev.gif",
      name: "Bukky",
      email: "bukky@gmail.com",
      phone: "08137204472",
    },
  ],
  friend: [],
  business: [],
};

const Global = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contact.push({ ...payload });
    },

    addFriends: (state, { payload }) => {
      const checkContact = state.friend.findIndex((el) => el.id === payload.id);

      if (checkContact >= 0) {
        state.friend[checkContact].QTY += 1;
      } else {
        state.friend.push({ ...payload, QTY: 1 });
      }
    },

    addBusiness: (state, { payload }) => {
      const checkContact = state.business.findIndex(
        (el) => el.id === payload.id
      );

      if (checkContact >= 0) {
        state.business[checkContact].QTY += 1;
      } else {
        state.business.push({ ...payload, QTY: 1 });
      }
    },
    removeFriend: (state, { payload }) => {
      state.friend = state.friend.filter((r) => r.id !== payload.id);
    },
    removeBusiness: (state, { payload }) => {
      state.business = state.business.filter((r) => r.id !== payload.id);
    },
  },
});

export const {
  addContact,
  addFriends,
  addBusiness,
  removeFriend,
  removeBusiness,
} = Global.actions;
export default Global.reducer;
