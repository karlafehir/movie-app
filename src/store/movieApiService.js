import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    headers: {
      Authorization: import.meta.env.REACT_APP_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => ({ url: "movie/popular?language=en-US&page=1" }),
      transformResponse: (response) => response.results,
    }),
    getFavoriteMovies: builder.query({
      query: () => ({
        url: "account/21966785/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      }),
      transformResponse: (response) => response.results,
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetFavoriteMoviesQuery } = movieApi;
