import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setCredentials } from '@/features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshToken = (api.getState() as RootState).auth.refreshToken;
    const refreshResult = await baseQuery({ url: '/refresh', body: { refreshToken } }, api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
