import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    traillerVideo: null,

    nowPlayingMovies: null,
    PopularMoviesMovies: null,
      UpComingMovies: null,
      TrandingMovies: null,
  },
  reducers: {
    addNowPlayingMovies (state, action) {
      state.nowPlayingMovies = action.payload
    },
    addPopularMovies (state, action) {
      state.PopularMoviesMovies = action.payload
    },
    addUpComingMovies (state, action) {
      state.UpComingMovies = action.payload
    },
    addTrandingMovies (state, action) {
      state.TrandingMovies = action.payload
    },
    
    addTraillerVideo (state, action) {
      state.traillerVideo = action.payload
    }
  }
})
export const { addNowPlayingMovies, addTraillerVideo, addPopularMovies, addUpComingMovies, addTrandingMovies } = moviesSlice.actions
export default moviesSlice.reducer
