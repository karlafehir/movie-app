import { useGetPopularActorsQuery } from "../../store/movieApiService";
import ActorsPage from "./ActorsPage";
import { useState } from "react";

const ActorsPageContainer = () => {
  const [page, setPage] = useState(1);
  const { data: actors } = useGetPopularActorsQuery(page);

  const onPageChange = (page) => {
    setPage(page);
  };

  return <ActorsPage actors={actors} onPageChange={onPageChange} />;
};

export default ActorsPageContainer;
