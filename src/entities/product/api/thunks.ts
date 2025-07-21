import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const thunksProduct = createApi({
    reducerPath: 'thunksProduct',
    baseQuery: fetchBaseQuery({baseUrl: 'http://212.193.48.233:8080'}),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => '/chairs'
        })
    })
});

export const { useGetProductsQuery } = thunksProduct;