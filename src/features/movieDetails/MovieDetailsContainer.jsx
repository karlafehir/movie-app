import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {
  useGetFavoriteMoviesQuery,
  useGetMovieActorsQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
  useGetMovieTrailerQuery,
} from "../../store/movieApiService";
import { useState } from "react";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const { data: movie } = useGetMovieDetailsQuery(movieId);
  const { data: actors } = useGetMovieActorsQuery(movieId);
  const { data: reviews } = useGetMovieReviewsQuery(movieId);
  const { data: movieTrailer } = useGetMovieTrailerQuery(movieId);
  let [isFavorite, setFavorite] = useState(true);

  const watchTrailer = () => {
    const trailerLink = `https://www.youtube.com/watch?v=${movieTrailer.key}`;
    window.open(trailerLink, "_blank");
  };
  const { data: favoriteMovies } = useGetFavoriteMoviesQuery();

  if (favoriteMovies) {
    isFavorite =
      favoriteMovies.find((favoriteMovie) => favoriteMovie.id == movieId) ??
      false;
  }

  console.log(isFavorite);

  return (
    <MovieDetails
      movie={movie}
      actors={actors}
      reviews={reviews}
      watchTrailer={watchTrailer}
      isFavorite={isFavorite}
    />
  );
};

export default MovieDetailsContainer;
