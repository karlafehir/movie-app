import HomePage from "./HomePage";
import { useGetPopularMoviesQuery } from "../../store/movieApiService";
import { useSearchMoviesQuery } from "../../store/movieApiService";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../store/searchMoviesSlice";

const HomePageContainer = () => {
  const { isFetching, data: movies } = useGetPopularMoviesQuery();

  const dispatch = useDispatch();

  const onSearch = (value, _e) => {
    dispatch(search(value));
  };

  const searchMovieParams = useSelector((state) => state.searchMovies.value);
  let { data: searchedMovies } = useSearchMoviesQuery(searchMovieParams);

  const moviesToDisplay =
    searchedMovies?.length === 0 ? movies : searchedMovies;

  return (
    <HomePage
      movies={moviesToDisplay}
      onSearch={onSearch}
      showSearch={true}
      isFetching={isFetching}
    />
  );
};

export default HomePageContainer;
