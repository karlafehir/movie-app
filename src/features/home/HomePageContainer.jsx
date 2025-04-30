import HomePage from "./HomePage";
import { useGetPopularMoviesQuery } from "../../store/movieApiService";

const HomePageContainer = () => {
  const { isLoading, data } = useGetPopularMoviesQuery();

  return <HomePage movies={data} />;
};

export default HomePageContainer;
