import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const thunksAuth = createApi({
    reducerPath: 'thunksAuth',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://212.193.48.233:8080' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<any, any>({
            query: (data: any) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })
    })
});


export const { useLoginUserMutation } = thunksAuth