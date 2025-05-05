import { createSlice } from "@reduxjs/toolkit";

export const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    value: "",
  },
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { search } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;
