import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import ProductSlice from "./ProSlice";

export const Store = configureStore({
    reducer:{
        Auth :Authslice.reducer,
        Pro: ProductSlice.reducer,
    },
});