import ActorCard from "../../components/cards/actorCard";
import MovieCardLarge from "../../components/cards/MovieCardLarge";
import { useDispatch } from "react-redux";
import { add } from "../../store/addFavoriteGenreSlice";
import { Avatar, Card } from "antd";
import { format } from "date-fns";

const MovieDetails = ({ movie, actors, reviews }) => {
  const dispatch = useDispatch();
  const { Meta } = Card;

  return (
    <>
      <div className="p-10">
        {movie && <MovieCardLarge movie={movie} />}
        {movie && movie.genres && (
          <div className="flex gap-4 py-4">
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
        <div className="font-semibold text-xl py-2">Cast:</div>
        <div className="flex flex-wrap gap-x-6">
          {actors &&
            actors.slice(0, 10).map((actor) => (
              <div key={actor.id}>
                <ActorCard actor={actor} />
              </div>
            ))}
        </div>
      </div>
      <div className="font-semibold text-xl py-2">Reviews:</div>
      <div>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id} className="pb-4">
              <Card>
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title={review.author}
                  description={format(review.created_at, "dd.MM.yyyy.")}
                />
                <p className="">{review.author_details.rating}</p>
                <p className="">{review.content}</p>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieDetails;
