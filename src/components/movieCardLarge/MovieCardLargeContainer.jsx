import { useFavoriteMovie } from "../../hooks/useFavoriteMovie";
import MovieCardLarge from "./MovieCardLarge";

const MovieCardLargeContaier = ({ movie }) => {
  const { postData } = useFavoriteMovie(movie.id);

  const addToFavorites = async () => {
    await postData();
  };

  return <MovieCardLarge movie={movie} addToFavorites={addToFavorites} />;
};

export default MovieCardLargeContaier;
