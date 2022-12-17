// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://6391cf11ac688bbe4c533d42.mockapi.io',
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    // getContacts: build.query({
    //   query: () => '/phonebook',
    //   // Provides a list of `Contacts` by `id`.
    //   // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
    //   // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Contacts` element was added.
    //   providesTags: result =>
    //     // is result available?
    //     result
    //       ? // successful query
    //         [
    //           ...result.map(({ id }) => ({ type: 'User', id })),
    //           { type: 'User', id: 'LIST' },
    //         ]
    //       : // an error occurred, but we still want to refetch this query when `{ type: 'Contacts', id: 'LIST' }` is invalidated
    //         [{ type: 'User', id: 'LIST' }],
    // }),
    getContactbyName: build.query({
      query: lastName => `/phonebook/${lastName}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    registerUser: build.mutation({
      query(body) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    logInUser: build.mutation({
      query(body) {
        return {
          url: `/users/login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    // deleteContact: build.mutation({
    //   query(id) {
    //     return {
    //       url: `/phonebook/${id}`,
    //       method: 'DELETE',
    //     };
    //   },
    //   // Invalidates all queries that subscribe to this Contacts `id` only.
    //   invalidatesTags: (result, error, id) => [{ type: 'User', id }],
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useGetContactbyNameQuery,
  useRegisterUserMutation,
  useLogInUserMutation,
  useDeleteContactMutation,
} = userApi;
