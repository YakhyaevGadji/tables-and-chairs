import { configureStore } from '@reduxjs/toolkit'
import { thunksProduct } from "@/entities/product/api/thunks";
import { thunksAuth } from '@/views/auth';
import { thunksCart } from '@/entities/cart-drawer';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [thunksProduct.reducerPath]: thunksProduct.reducer,
            [thunksAuth.reducerPath]: thunksAuth.reducer,
            [thunksCart.reducerPath]: thunksCart.reducer,

        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(thunksProduct.middleware, thunksAuth.middleware, thunksCart.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];