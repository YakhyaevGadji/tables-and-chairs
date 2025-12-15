import { configureStore } from '@reduxjs/toolkit'
import { thunksProduct } from "@/entities/product/api/thunks";
import { thunksAuth } from '@/views/auth';
import { thunksCart } from '@/entities/cart-drawer';
import { thunksApplications } from '@/entities/applications/model/thunkApplications';

import authSlice from "@/entities/admin/model/auth-slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [thunksProduct.reducerPath]: thunksProduct.reducer,
            [thunksAuth.reducerPath]: thunksAuth.reducer,
            [thunksCart.reducerPath]: thunksCart.reducer,
            [thunksApplications.reducerPath]: thunksApplications.reducer,
            auth: authSlice,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(thunksProduct.middleware, thunksAuth.middleware, thunksCart.middleware, thunksApplications.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];