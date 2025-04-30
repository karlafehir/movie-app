import { HeartFilled } from "@ant-design/icons";
import { useAddFavoriteMovie } from "../../hooks/useAddFavoriteMovie";

const MovieCardLarge = ({ movie }) => {
  const { postData } = useAddFavoriteMovie(movie.id);

  const addToFavorites = async () => {
    await postData();
  };
  useAddFavoriteMovie;

  return (
    <>
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-8 w-full h-120">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
          alt={movie.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40"></div>
        <div className="z-1">
          <h3 className="text-3xl font-bold text-white">{movie.title}</h3>
          <div className="overflow-hidden text-sm leading-6 text-gray-300">
            {movie.overview}
          </div>
          <div className="flex justify-between mt-4">
            <div className="border-2 border-solid px-4 py-2 rounded-4xl cursor-pointer">
              Watch Trailer
            </div>
            <div
              className="border-2 border-solid px-3 py-2 rounded-4xl cursor-pointer"
              onClick={addToFavorites}
            >
              <HeartFilled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardLarge;
