import { useCallback } from "react";

export const useAddFavoriteMovie = (movieId) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: import.meta.env.REACT_APP_API_KEY,
    },
    body: JSON.stringify({
      media_id: movieId,
      media_type: "movie",
      favorite: true,
    }),
  };

  const postData = useCallback(async () => {
    fetch("https://api.themoviedb.org/3/account/21966785/favorite", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, [movieId]);

  return { postData };
};
