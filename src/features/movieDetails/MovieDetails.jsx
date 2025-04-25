import MovieCardLargeContaier from "../../components/movieCardLarge/MovieCardLargeContainer";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className="p-10">
        <MovieCardLargeContaier movie={movie} />
        <div className="flex gap-4 p-4">
          {movie.genres.map((genre) => (
            <div
              key={genre.key}
              className="border-2 border-solid px-3 py-2 rounded-4xl cursor-pointer w-max"
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
