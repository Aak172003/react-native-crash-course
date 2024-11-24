import { createSlice } from "@reduxjs/toolkit";

const WishlsitSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: []
    },
    reducers: {
        addItemToWishList(state, action) {
            let tempData = state.data
            tempData.push(action.payload)
            state.data = tempData
        },
        removeItemFromWishList(state, action) {
            let tempData = state.data
            tempData.splice(action.payload, 1)
            state.data = tempData
        }
    }
})

export const { addItemToWishList, removeItemFromWishList } = WishlsitSlice.actions
export default WishlsitSlice.reducer