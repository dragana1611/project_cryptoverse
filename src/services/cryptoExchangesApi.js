import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coingecko.p.rapidapi.com";

export const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coingecko.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
  }),
});

export const { useGetExchangesQuery } = coinGeckoApi;
