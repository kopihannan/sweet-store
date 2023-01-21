import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (_id) => `products/${_id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = productApi;
