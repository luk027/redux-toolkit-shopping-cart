import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    // tagTypes: ['Products'],
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => `products/`,
            // providesTags: ['Products'],
        }),

    }),
});

export const {
    useGetProductsQuery
} = productsApi;