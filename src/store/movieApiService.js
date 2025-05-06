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
    getMovieDetails: builder.query({
      query: (id) => ({
        url: `movie/${id}?language=en-US`,
      }),
    }),
    getMovieActors: builder.query({
      query: (id) => ({
        url: `movie/${id}/credits?language=en-US`,
      }),
      transformResponse: (response) => response.cast,
    }),
    getMovieReviews: builder.query({
      query: (id) => ({
        url: `movie/${id}/reviews?language=en-US&page=1`,
      }),
      transformResponse: (response) => response.results,
    }),
    searchMovies: builder.query({
      query: (query) => ({
        url: `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      }),
      transformResponse: (response) => response.results,
    }),
    getMovieTrailer: builder.query({
      query: (id) => ({
        url: `movie/${id}/videos?language=en-US`,
      }),
      transformResponse: (response) =>
        response.results.find((response) => response.type == "Trailer"),
    }),
    searchMoviesByGenre: builder.query({
      query: (id) => ({
        url: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
      }),
      transformResponse: (response) => response.results,
    }),
    getMovieGenres: builder.query({
      query: () => ({
        url: `genre/movie/list?language=en`,
      }),
      transformResponse: (response) => response.genres,
    }),
    getPopularActors: builder.query({
      query: () => ({
        url: `person/popular?language=en-US&page=1`,
      }),
      transformResponse: (response) =>
        response.results.filter(
          (result) => result.known_for_department === "Acting"
        ),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetFavoriteMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieActorsQuery,
  useGetMovieReviewsQuery,
  useSearchMoviesQuery,
  useGetMovieTrailerQuery,
  useSearchMoviesByGenreQuery,
  useGetMovieGenresQuery,
  useGetPopularActorsQuery,
} = movieApi;
