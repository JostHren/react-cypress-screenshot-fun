import { apiSlice } from '@/app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: '/account/me',
        method: 'GET',
        body: undefined,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApiSlice;
