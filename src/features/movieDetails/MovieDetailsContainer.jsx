import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {
  useGetMovieActorsQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
  useGetMovieTrailerQuery,
} from "../../store/movieApiService";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const { data: movie } = useGetMovieDetailsQuery(movieId);
  const { data: actors } = useGetMovieActorsQuery(movieId);
  const { data: reviews } = useGetMovieReviewsQuery(movieId);
  const { data: movieTrailer } = useGetMovieTrailerQuery(movieId);

  const watchTrailer = () => {
    const trailerLink = `https://www.youtube.com/watch?v=${movieTrailer.key}`;
    window.open(trailerLink, "_blank");
    console.log("open link", trailerLink);
  };

  return (
    <MovieDetails
      movie={movie}
      actors={actors}
      reviews={reviews}
      watchTrailer={watchTrailer}
    />
  );
};

export default MovieDetailsContainer;
