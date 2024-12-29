import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        traillerVideo: null,
    },
    reducers: {
        addNowPlayingMovies(state, action) {
            state.nowPlayingMovies = action.payload;
        },
        addTraillerVideo(state, action) {
            state.traillerVideo = action.payload;
        },

    }

});
export const { addNowPlayingMovies,addTraillerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;