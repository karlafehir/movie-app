import { useState } from "react";
import {
  useSearchMoviesByGenreQuery,
  useGetMovieGenresQuery,
} from "../../store/movieApiService";
import GenresPage from "./GenresPage";

const GenresPageContainer = () => {
  const [page, setPage] = useState(1);
  const [genreId, setGenreId] = useState(28);
  const { isFetching, data: movies } = useSearchMoviesByGenreQuery({
    page,
    genreId,
  });

  const { data: movieGenres } = useGetMovieGenresQuery();

  const onPageChange = (page) => {
    setPage(page);
  };

  const handleGenreChange = (e) => {
    setGenreId(e.target.value);
  };

  return (
    <GenresPage
      movies={movies}
      movieGenres={movieGenres}
      handleGenreChange={handleGenreChange}
      onPageChange={onPageChange}
      isFetching={isFetching}
    />
  );
};

export default GenresPageContainer;
