import MovieCardContaier from "../../components/MovieCardContainer";

const HomePage = ({ movies }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCardContaier key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
