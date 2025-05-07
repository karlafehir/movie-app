import HomePage from "../home/HomePage";
import { Radio } from "antd";
import { Pagination } from "antd";

const GenresPage = ({
  movies,
  movieGenres,
  handleGenreChange,
  onPageChange,
}) => {
  return (
    <>
      {movieGenres && (
        <div className="flex gap-4">
          <Radio.Group
            defaultValue={28}
            size="large"
            onChange={(e) => {
              handleGenreChange(e);
            }}
          >
            {movieGenres.map((genre) => (
              <Radio.Button key={genre.id} value={genre.id}>
                {genre.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
      )}
      {movies && <HomePage movies={movies} />}
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        onChange={onPageChange}
      />
    </>
  );
};

export default GenresPage;
