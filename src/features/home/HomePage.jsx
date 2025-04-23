import MovieCard from "../../components/MovieCard";

const HomePage = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default HomePage;
