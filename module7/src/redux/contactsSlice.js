import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    filter: "",
  },
  reducers: {
    onChangeFilterStore(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { onChangeFilterStore } = contactSlice.actions;
