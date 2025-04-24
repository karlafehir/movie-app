import { HeartFilled } from "@ant-design/icons";

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <div className="rounded-xl h-120 w-64 cursor-pointer bg-white/5">
      <img
        className="object-cover rounded-t-lg"
        src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        alt={movie.title}
      />
      <div className="pt-3 pb-4 pl-4">
        <div className="font-semibold ">{movie.title}</div>
        <div className=" text-white/30">{movie.release_date}</div>
      </div>
      <div onClick={addToFavorites}>
        <HeartFilled />
      </div>
    </div>
  );
};

export default MovieCard;
