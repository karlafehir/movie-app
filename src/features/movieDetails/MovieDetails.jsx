import ActorCard from "../../components/actorCard/actorCard";
import MovieCardLargeContaier from "../../components/movieCardLarge/MovieCardLargeContainer";

const MovieDetails = ({ movie, actors }) => {
  return (
    <>
      <div className="p-10">
        <MovieCardLargeContaier movie={movie} />
        {movie.genres && (
          <div className="flex gap-4 p-4">
            {movie.genres.map((genre) => (
              <div
                key={genre.id}
                className="border-2 border-solid px-3 py-2 rounded-4xl w-max"
              >
                {genre.name}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-x-6">
          {actors &&
            actors.slice(0, 10).map((actor) => (
              <div key={actor.id}>
                <ActorCard actor={actor} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
