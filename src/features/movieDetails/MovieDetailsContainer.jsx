import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {
  useGetMovieActorsQuery,
  useGetMovieDetailsQuery,
} from "../../store/movieApiService";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const { data: movie } = useGetMovieDetailsQuery(movieId);
  const { data: actors } = useGetMovieActorsQuery(movieId);

  return <MovieDetails movie={movie} actors={actors} />;
};

export default MovieDetailsContainer;
