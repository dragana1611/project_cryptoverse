import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { message } from "antd";

// const cryptoHeaders = {
//   "X-RapidAPI-Key": "a68eb5ace8msh0278d1c065a1300p1d8b16jsne97d8d61872c",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://api.coinranking.com/v2";
// const createRequest = (url) => ({ url, headers: cryptoHeaders });

//  export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => {
//     getCryptos: builder.query({
//       query: () => createRequest("/coin/"),
//     });
//   },
// } || {});

// export const { useGetCryptosQuery } = cryptoApi;

//redux toolkit creates a hook that we can call instantly to get all the data for our query

const cryptoApiHeaders = {
  // 'X-RapidAPI-Host': RAPIDAPI_HOST,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "b1d57f69b3mshadfcecfc9e489a6p14b18cjsn87ec366e56b2",
};  

// const baseUrl = CRYPTO_API_URL;
const baseUrl = "https://coinranking1.p.rapidapi.com";

const creatRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => creatRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => creatRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    //
    // Note: To access this endpoint you need premium plan
    // getExchanges: builder.query({
    //     query: () => createRequest('/exchanges'),
    // }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  // useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
