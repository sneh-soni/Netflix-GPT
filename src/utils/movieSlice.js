import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailer: null,
    Popular: null,
    topRated: null,
    upcoming: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailer,
  addPopular,
  addTopRated,
  addUpcoming,
} = movieSlice.actions;
export default movieSlice.reducer;
