import { useFetch } from "../../hooks/useFetch";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const movies = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  console.log(movies);
  return <HomePage movies={movies} />;
};

export default HomePageContainer;
