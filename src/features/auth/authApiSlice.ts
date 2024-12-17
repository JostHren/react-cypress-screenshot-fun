import { apiSlice } from '@/app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/account/register',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/account/login',
        method: 'POST',
        body,
      }),
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: '/account/refresh',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRefreshMutation } = authApiSlice;
