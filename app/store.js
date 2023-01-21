import authReducer from "@/productApi/authSlice";
import cartReducer from "@/productApi/cartSlice";
import { productApi } from "@/productApi/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
