import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-xl h-130 w-64">
      <Link to={`/movie/${movie.id}`} className="cursor-pointer">
        <img
          className="object-cover rounded-lg h-100"
          src={` ${
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original" + movie.poster_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
          }`}
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
