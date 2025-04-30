import { configureStore } from "@reduxjs/toolkit";
import favoriteGenre from "./addFavoriteGenreSlice";

const store = configureStore({
  reducer: {
    favoriteGenre,
  },
});
export default store;
