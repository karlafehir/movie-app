import MovieCard from "../../components/cards/MovieCard";
import { useDispatch } from "react-redux";
import { search } from "../../store/searchMoviesSlice";

const HomePage = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const searchParam = formData.get("title") ?? "";
          dispatch(search(searchParam));
        }}
      >
        <label htmlFor="title">
          <input id="title" name="title" placeholder="Search by title" />
        </label>
      </form>

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
