import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trendingCoinApi = createApi({
  reducerPath: "trendingCoinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CRYPTO_API_BASE_URL,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_CRYPTO_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "/search/trending",
    }),
  }),
});
 

export const { useGetTrendingCoinsQuery } = trendingCoinApi;
