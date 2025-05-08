import HomePage from "../home/HomePage";
import { Radio } from "antd";
import { Pagination, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const GenresPage = ({
  movies,
  movieGenres,
  handleGenreChange,
  onPageChange,
  isFetching,
}) => {
  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

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
