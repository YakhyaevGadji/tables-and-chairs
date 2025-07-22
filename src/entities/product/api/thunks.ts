import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PATCH } from "@/shared/config/pages.config";
import { API_URL } from "@/shared/lib/axios-instance";

export const thunksProduct = createApi({
    reducerPath: 'thunksProduct',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => PATCH.CHAIRS
        })
    })
});

export const { useGetProductsQuery } = thunksProduct;