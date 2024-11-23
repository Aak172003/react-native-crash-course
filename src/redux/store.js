import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slices/ProductSlice'
import WishlistReducer from './slices/WishlistSlice'
import CartResucer from './slices/CartSlice'

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        wishlist: WishlistReducer,
        cart: CartResucer
    }
})