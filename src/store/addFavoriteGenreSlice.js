import { createSlice } from "@reduxjs/toolkit";

const addFavoriteGenreSlice = createSlice({
  name: "favoriteGenre",
  initialState: { value: null },
  reducers: {
    add(state, action) {
      state.value = action.payload;
    },
  },
});

export const { add } = addFavoriteGenreSlice.actions;
export default addFavoriteGenreSlice.reducer;
