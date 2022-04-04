import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import { rootReducer } from "../reducer/rootReducer";

const store = configureStore({
    reducer: {
        rootReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;