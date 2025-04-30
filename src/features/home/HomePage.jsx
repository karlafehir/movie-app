import MovieCard from "../../components/cards/MovieCard";
import { useSelector } from "react-redux";

const HomePage = ({ movies }) => {
  const favoriteGenre = useSelector((state) => state.favoriteGenre.value);

  return (
    <>
      <div>favorite genre: {favoriteGenre}</div>
      <div className="flex gap-4 flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
