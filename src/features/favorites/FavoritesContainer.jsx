import HomePage from "../home/HomePage";
import { useGetFavoriteMoviesQuery } from "../../store/movieApiService";

const FavoritesContainer = () => {
  const { isLoaing, data } = useGetFavoriteMoviesQuery();

  return <HomePage movies={data} />;
};

export default FavoritesContainer;
