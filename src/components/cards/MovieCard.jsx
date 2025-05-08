import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-xl h-120 w-64">
      <Link to={`/movie/${movie.id}`} className="cursor-pointer">
        <img
          className="object-cover rounded-lg"
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt={movie.title}
        />
      </Link>

      <div className="pt-2 pb-4 pl-2">
        <div>
          <div className="font-bold">{movie.title}</div>
        </div>

        <div className="flex justify-between font-light text-gray-400">
          <div>{movie.release_date}</div>
          <div className="flex">
            <StarFilled style={{ color: "yellow" }} />
            <div>{movie.vote_average}/10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
