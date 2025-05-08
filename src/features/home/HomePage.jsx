import MovieCard from "../../components/cards/MovieCard";
import { Input } from "antd";
import Spinner from "../../components/loading/Spinner";

const HomePage = ({ movies, onSearch, showSearch, isFetching }) => {
  const { Search } = Input;

  if (isFetching) {
    return <Spinner />;
  }
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
