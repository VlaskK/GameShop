import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart : [],
        itemsInFav: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        removeItemInCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        },
        setItemInFav: (state, action) => {
            state.itemsInFav.push(action.payload)
        },
        removeItemInFav: (state, action) => {
            state.itemsInFav = state.itemsInFav.filter(game => game.id !== action.payload)
        }
    }
})

export const { setItemInCart, removeItemInCart, setItemInFav, removeItemInFav} = cartSlice.actions;
export default cartSlice.reducer;