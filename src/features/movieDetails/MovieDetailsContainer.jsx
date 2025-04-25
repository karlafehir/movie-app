import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { useFetch } from "../../hooks/useFetch";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();

  const movie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  );

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsContainer;
