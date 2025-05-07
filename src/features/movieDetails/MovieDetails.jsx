import ActorCard from "../../components/cards/actorCard";
import MovieCardLarge from "../../components/cards/MovieCardLarge";
import { useDispatch } from "react-redux";
import { add } from "../../store/addFavoriteGenreSlice";
import ReviewCard from "../../components/cards/reviewCard";

const MovieDetails = ({ movie, actors, reviews, watchTrailer }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-10">
        {movie && <MovieCardLarge movie={movie} watchTrailer={watchTrailer} />}
        {movie && movie.genres && (
          <div className="flex gap-4">
            {movie.genres.map((genre) => (
              <div
                onClick={() => {
                  dispatch(add(genre.name));
                }}
                key={genre.id}
                className="border-2 border-solid px-3 py-2 rounded-4xl w-max text-white/40"
              >
                {genre.name}
              </div>
            ))}
          </div>
        )}

        <div className="font-semibold text-2xl pl-3 border-l-4 border-white mt-8">
          Cast:
        </div>
        <div className="flex flex-wrap gap-x-6">
          {actors &&
            actors.slice(0, 10).map((actor) => (
              <div key={actor.id}>
                <ActorCard actor={actor} />
              </div>
            ))}
        </div>

        <div className="font-semibold text-xl pl-3 border-l-4 border-white mt-8">
          Reviews:
        </div>
        <div className="">
          {reviews &&
            reviews.map((review) => (
              <div key={review.id} className="pb-4">
                <ReviewCard review={review} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
