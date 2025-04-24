import { useFetch } from "../../hooks/useFetch";
import HomePage from "../home/HomePage";

const FavoritesContainer = () => {
  const favoriteMovies = useFetch(
    "https://api.themoviedb.org/3/account/21966785/favorite/movies?language=en-US&page=1&sort_by=created_at.asc"
  );

  return <HomePage movies={favoriteMovies} />;
};

export default FavoritesContainer;
