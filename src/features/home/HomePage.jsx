import MovieCardContaier from "../../components/movieCard/MovieCardContainer";

const HomePage = ({ movies }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {movies.map((movie) => (
        <MovieCardContaier key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
