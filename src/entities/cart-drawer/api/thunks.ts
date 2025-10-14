import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PATCH } from "@/shared/config/pages.config";
import { API_URL } from "@/shared/lib/axios-instance";
import { TypeCart } from "@/app/types";

export const thunksCart = createApi({
    reducerPath: 'thunksCart',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ["Cart"],
    endpoints: (builder) => ({
        getCart: builder.query<TypeCart, number>({
            query: (id: number) => PATCH.CART(id),
            providesTags: ["Cart"], // 👈 чтобы invalidate работало
        }),
        updateCartItem: builder.mutation<TypeCart, { id: number; items: any[] }>({
            query: ({ id, items }) => ({
                url: PATCH.CART(id),
                method: "PATCH",
                body: { items },
            }),
            invalidatesTags: ["Cart"], // 👈 перезапрашивает getCart после изменения
        }),
    })
});

export const { useGetCartQuery, useUpdateCartItemMutation } = thunksCart;