import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CRYPTO_API_BASE_URL,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_CRYPTO_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getCoinList: builder.query({
      query: (vs_currency) => `/coins/markets?vs_currency=${vs_currency}`,
    }),
    getCoinById: builder.query({
      query: (coinId) => `/coins/${coinId}`,
    }),
    getCoinHistoryData: builder.query({
      query: ({ coinId, vs_currency = "usd", days = 7 }) =>`/coins/${coinId}/market_chart?vs_currency=${vs_currency}&days=${days}&interval=daily`
      
    }),
  }),
});

export const {
  useGetCoinListQuery,
  useGetCoinByIdQuery,
  useLazyGetCoinHistoryDataQuery,
} = cryptoApi;
