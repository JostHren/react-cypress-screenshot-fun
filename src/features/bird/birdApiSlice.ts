import { apiSlice } from '@/app/api/apiSlice';

export interface Card {
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

export interface CardData {
  items: Card[];
  order: string[];
  filters: {};
  total: number;
  page: number;
  limit: number;
}

export const birdApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBirds: builder.query<CardData, string>({
      query: () => ({
        url: '/birds',
        method: 'GET',
      }),
    }),
    getUserBirds: builder.query<CardData, string>({
      query: () => ({
        url: '/account/birds',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetBirdsQuery, useGetUserBirdsQuery } = birdApiSlice;
