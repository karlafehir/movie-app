import { configureStore } from "@reduxjs/toolkit";
import favoriteGenre from "./addFavoriteGenreSlice";
import { movieApi } from "./movieApiService";
import searchMovies from "./searchMoviesSlice";

const store = configureStore({
  reducer: {
    favoriteGenre,
    searchMovies,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
