import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62b70279491a19c97aed0b08.mockapi.io/contacts/contacts",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => ``,
      providesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: ``,
        method: "POST",
        body: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
    changeContact: builder.mutation({
      query: ({ name, number, id }) => ({
        url: `${id}`,
        method: "PUT",
        body: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useChangeContactMutation,
} = contactsApi;
