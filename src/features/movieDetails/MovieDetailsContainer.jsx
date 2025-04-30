import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { useFetch } from "../../hooks/useFetch";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const movie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  );

  const credits = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
  );

  const actors = credits.cast;

  return <MovieDetails movie={movie} actors={actors} />;
};

export default MovieDetailsContainer;
