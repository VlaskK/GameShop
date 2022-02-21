import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        currGame : null
    },
    reducers: {
        setCurrGame : (state, action) => {
            state.currGame = action.payload
        }
    }
})

export const { setCurrGame } = gameSlice.actions;
export default gameSlice.reducer;