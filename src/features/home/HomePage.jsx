import MovieCard from "../../components/cards/MovieCard";

const HomePage = ({ movies }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
