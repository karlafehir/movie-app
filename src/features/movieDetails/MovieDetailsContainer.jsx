import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {
  useGetMovieActorsQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
} from "../../store/movieApiService";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const { data: movie } = useGetMovieDetailsQuery(movieId);
  const { data: actors } = useGetMovieActorsQuery(movieId);
  const { data: reviews } = useGetMovieReviewsQuery(movieId);

  return <MovieDetails movie={movie} actors={actors} reviews={reviews} />;
};

export default MovieDetailsContainer;
