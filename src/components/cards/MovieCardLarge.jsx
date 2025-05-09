import { CheckOutlined, HeartFilled } from "@ant-design/icons";
import { useAddFavoriteMovieMutation } from "../../store/movieApiService";

import { notification } from "antd";

const MovieCardLarge = ({ movie, watchTrailer, isFavorite }) => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (isFavorite) => {
    const message = !isFavorite
      ? "added to favorites"
      : "removed from favorites";
    api.open({
      description: `Movie ${message} successfully!`,
      top,
      icon: <CheckOutlined style={{ fontSize: "22px" }} />,
      closeIcon: false,
      style: {
        backgroundColor: "rgb(0,0,0,0.7)",
        border: "2px solid #ff6c00b3",
        borderRadius: "8px",
        color: "#FFFFFF",
        padding: 12,
        paddingBottom: 20,
        top: 20,
      },
    });
  };

  const [addFavoriteMovie, { isLoading }] = useAddFavoriteMovieMutation();

  const addToFavorites = async () => {
    addFavoriteMovie({ movieId: movie.id, isFavorite: !isFavorite });
    showNotification(isFavorite);
  };

  return (
    <>
      {contextHolder}
      {movie && (
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
              <div
                className="border-2 border-solid px-4 py-2 rounded-4xl cursor-pointer hover-btn"
                onClick={watchTrailer}
              >
                Watch Trailer
              </div>
              <div
                className={` ${isFavorite ? "filled-btn" : "hover-btn"}`}
                onClick={addToFavorites}
                disabled={isLoading}
              >
                <HeartFilled />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCardLarge;
