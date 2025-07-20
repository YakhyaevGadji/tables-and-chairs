import { configureStore } from '@reduxjs/toolkit'
import { thunksProduct } from "@/entities/product/api/thunks";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [thunksProduct.reducerPath]: thunksProduct.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunksProduct.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];