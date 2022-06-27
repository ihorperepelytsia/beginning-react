import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContactStore(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContactStore(state, action) {
      state.items = [...state.items.filter(({ id }) => id !== action.payload)];
    },
    onChangeFilterStore(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const contactSliceReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContactStore, deleteContactStore, onChangeFilterStore } =
  contactSlice.actions;
