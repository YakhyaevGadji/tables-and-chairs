import { configureStore } from '@reduxjs/toolkit'
import { thunksProduct } from "@/entities/product/api/thunks";
import { thunksAuth } from '@/views/auth';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [thunksProduct.reducerPath]: thunksProduct.reducer,
            [thunksAuth.reducerPath]: thunksAuth.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunksProduct.middleware, thunksAuth.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];