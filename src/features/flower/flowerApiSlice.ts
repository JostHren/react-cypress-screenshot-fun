import { apiSlice } from '@/app/api/apiSlice';

export interface Flower {
  id: string;
  name: string;
  latinName: string;
  genus: string;
  pictureUrl: string;
  authorId: string;
  sightingsNum: number;
  isFavorite?: boolean;
  description?: string;
  features?: string;
}

export interface Flowers {
  items: Flower[];
  order: string[];
  filters: {};
  total: number;
  page: number;
  limit: number;
}

export const flowerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlowers: builder.query({
      query: () => ({
        url: '/flowers',
        method: 'GET',
      }),
    }),
    getUserFlowers: builder.query({
      query: () => ({
        url: '/account/flowers',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetFlowersQuery, useGetUserFlowersQuery } = flowerApiSlice;
