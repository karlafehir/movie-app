import { useState } from "react";
import {
  useSearchMoviesByGenreQuery,
  useGetMovieGenresQuery,
} from "../../store/movieApiService";
import GenresPage from "./GenresPage";

const GenresPageContainer = () => {
  const [genreId, setGenreId] = useState(28);
  const { data: movies } = useSearchMoviesByGenreQuery(genreId);
  const { data: movieGenres } = useGetMovieGenresQuery();

  const handleGenreChange = (e) => {
    setGenreId(e.target.value);
  };

  return (
    <GenresPage
      movies={movies}
      movieGenres={movieGenres}
      handleGenreChange={handleGenreChange}
    />
  );
};

export default GenresPageContainer;
