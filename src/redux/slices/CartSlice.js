import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addItemToCart(state, action) {
          console.log("action payload ---------------------======================== ", action.payload)
        },

    },
});

export const { addItemToCart } = CartSlice.actions;
export default CartSlice.reducer;
