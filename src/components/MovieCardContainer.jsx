import { useFavoriteMovie } from "../hooks/useFavoriteMovie";
import MovieCard from "./MovieCard";

const MovieCardContaier = ({ movie }) => {
  const { postData } = useFavoriteMovie(movie.id);

  const addToFavorites = async () => {
    await postData();
  };

  return <MovieCard movie={movie} addToFavorites={addToFavorites} />;
};

export default MovieCardContaier;
