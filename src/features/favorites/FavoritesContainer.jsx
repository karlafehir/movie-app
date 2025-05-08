import HomePage from "../home/HomePage";
import { useGetFavoriteMoviesQuery } from "../../store/movieApiService";

const FavoritesContainer = () => {
  const { isFetching, data } = useGetFavoriteMoviesQuery();

  return <HomePage movies={data} isFetching={isFetching} />;
};

export default FavoritesContainer;
