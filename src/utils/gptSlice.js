import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPT: false,
    gptMovies: null,
    openaiResults: null,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
    addGptMovies: (state, action) => {
      const { gptMovies, openaiResults } = action.payload;
      state.gptMovies = gptMovies;
      state.openaiResults = openaiResults;
    },
  },
});

export const { toggleGPT, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
