import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {
  useGetFavoriteMoviesQuery,
  useGetMovieActorsQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
  useGetMovieTrailerQuery,
} from "../../store/movieApiService";
import { useMemo } from "react";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const { data: movie } = useGetMovieDetailsQuery(movieId);
  const { data: actors } = useGetMovieActorsQuery(movieId);
  const { data: reviews } = useGetMovieReviewsQuery(movieId);
  const { data: movieTrailer } = useGetMovieTrailerQuery(movieId);
  const { data: favoriteMovies } = useGetFavoriteMoviesQuery();

  const watchTrailer = () => {
    const trailerLink = `https://www.youtube.com/watch?v=${movieTrailer.key}`;
    window.open(trailerLink, "_blank");
  };

  const isFavorite = useMemo(() => {
    if (!favoriteMovies || !movieId) {
      return false;
    }
    return favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === parseInt(movieId)
    );
  }, [favoriteMovies, movieId]);

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
