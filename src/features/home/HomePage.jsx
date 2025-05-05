import MovieCard from "../../components/cards/MovieCard";
import { Input } from "antd";

const HomePage = ({ movies, onSearch }) => {
  const { Search } = Input;

  return (
    <>
      <Search
        placeholder="Search movies by title"
        onSearch={onSearch}
        style={{ width: 300 }}
      />

      {movies && (
        <div className="flex gap-4 flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
