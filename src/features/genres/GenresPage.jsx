import HomePage from "../home/HomePage";
import { Radio } from "antd";

const GenresPage = ({ movies, movieGenres, handleGenreChange }) => {
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
      <HomePage movies={movies} />;
    </>
  );
};

export default GenresPage;
