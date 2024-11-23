import { createSlice } from "@reduxjs/toolkit";

const WishlsitSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: []
    },
    reducers: {
        addItemToWishList(state, action) {
            // get initial data 
            let tempData = state.data
            // push new dat into intial array of data
            tempData.push(action.payload)
            // set state.data as new updated tempData
            state.data = tempData
        }
    }
})

export const { addItemToWishList } = WishlsitSlice.actions
export default WishlsitSlice.reducer