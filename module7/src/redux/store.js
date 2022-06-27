import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactSlice } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
