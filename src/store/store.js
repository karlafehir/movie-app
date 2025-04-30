import { configureStore } from "@reduxjs/toolkit";
import favoriteGenre from "./addFavoriteGenreSlice";
import { movieApi } from "./movieApiService";

const store = configureStore({
  reducer: {
    favoriteGenre,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
