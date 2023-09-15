import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "a68eb5ace8msh0278d1c065a1300p1d8b16jsne97d8d61872c",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  const responseData = response.data.then()
  console.log(responseData);
} catch (error) {
  console.error(error);
}

const cryptoHeaders = options.headers;

const baseUrl = options.url;
const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    builder.query({
      query: () => createRequest("/coins"),
    });
  },
});

export const { useGetCryptosQuery } = cryptoApi;
//redux toolkit creates a hook that we can call instantly to get all the data for our query
