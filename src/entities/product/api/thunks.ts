import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PATCH } from "@/shared/config/pages.config";
import { API_URL } from "@/shared/lib/axios-instance";
import { TypeChair } from "@/entities/product";

export const thunksProduct = createApi({
    reducerPath: 'thunksProduct',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query<TypeChair[], void>({
            query: () => PATCH.CHAIRS
        }),
        getOneProduct: builder.query<TypeChair, string>({
            query: (slug: string) => PATCH.CHAIR(slug)
        })
    })
});

export const { useGetProductsQuery, useGetOneProductQuery } = thunksProduct;