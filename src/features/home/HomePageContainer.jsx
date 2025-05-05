import HomePage from "./HomePage";
import { useGetPopularMoviesQuery } from "../../store/movieApiService";
import { useSearchMoviesQuery } from "../../store/movieApiService";
import { useSelector } from "react-redux";

const HomePageContainer = () => {
  const { data: movies } = useGetPopularMoviesQuery();

  const searchMovieParams = useSelector((state) => state.searchMovies.value);
  let { data: searchedMovies } = useSearchMoviesQuery(searchMovieParams);
  const moviesToDisplay =
    searchedMovies?.length === 0 ? movies : searchedMovies;

  return <HomePage movies={moviesToDisplay} />;
};

export default HomePageContainer;
