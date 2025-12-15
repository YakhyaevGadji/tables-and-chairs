import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Order } from '../types'
import { API_URL } from '@/shared/lib/axios-instance'
import { PATCH } from '@/shared/config/pages.config'

export type UpdateStatusDto = {
    id: number
    data: Order
}

export const thunksApplications = createApi({
    reducerPath: 'applicationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Applications'],
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => PATCH.APPLICATIONS,
            providesTags: ['Applications'],
        }),

        updateOrderStatus: builder.mutation<Order, UpdateStatusDto>({
            query: ({ id, data }) => ({
                url: PATCH.ORDER(id),
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Applications'],
        }),
    }),
})

export const {
    useGetOrdersQuery,
    useUpdateOrderStatusMutation,
} = thunksApplications
