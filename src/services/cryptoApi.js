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
      query: (vs_currency) => `/markets?vs_currency=${vs_currency}`,
    }),
  }),
});

export const { useGetCoinListQuery } = cryptoApi;
