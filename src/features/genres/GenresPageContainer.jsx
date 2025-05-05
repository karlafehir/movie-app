import { useSearchMoviesByGenreQuery } from "../../store/movieApiService";
import { useDispatch } from "react-redux";
import { search } from "../../store/searchMoviesSlice";
import HomePage from "../home/HomePage";

const GenresPageContainer = () => {
  const { data: movies } = useSearchMoviesByGenreQuery(28);

  const dispatch = useDispatch();

  const onSearch = (value, _e) => {
    dispatch(search(value));
  };

  return <HomePage movies={movies} onSearch={onSearch} />;
};

export default GenresPageContainer;
