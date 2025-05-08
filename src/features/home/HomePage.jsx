import MovieCard from "../../components/cards/MovieCard";
import { Input } from "antd";

const HomePage = ({ movies, onSearch, showSearch }) => {
  const { Search } = Input;

  return (
    <>
      {showSearch && (
        <Search
          placeholder="Search movies by title"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      )}
      {movies && (
        <div className="flex gap-4 flex-wrap mt-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
