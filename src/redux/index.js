import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer"
import gameReducer from "./game/reducer"

const store = configureStore({
    reducer: {
        game: gameReducer,
        cart: cartReducer
    }
})

export default store;