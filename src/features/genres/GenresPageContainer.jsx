import {
  useSearchMoviesByGenreQuery,
  useGetMovieGenresQuery,
} from "../../store/movieApiService";
import GenresPage from "./GenresPage";

const GenresPageContainer = () => {
  const { data: movies } = useSearchMoviesByGenreQuery(28);
  const { data: movieGenres } = useGetMovieGenresQuery();

  return <GenresPage movies={movies} movieGenres={movieGenres} />;
};

export default GenresPageContainer;
