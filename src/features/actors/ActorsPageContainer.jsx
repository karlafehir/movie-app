import {
  useGetPopularActorsQuery,
  useSearchActorsQuery,
} from "../../store/movieApiService";
import ActorsPage from "./ActorsPage";
import { useState } from "react";

const ActorsPageContainer = () => {
  const [searchParams, setSearchParams] = useState("");
  const [page, setPage] = useState(1);
  const { data: actors } = useGetPopularActorsQuery(page);

  const onPageChange = (page) => {
    setPage(page);
  };

  const onSearch = (value, _e) => {
    setSearchParams(value);
  };

  let { data: searchedActors } = useSearchActorsQuery(searchParams);
  const actorsToDisplay =
    searchedActors?.length === 0 ? actors : searchedActors;

  return (
    <ActorsPage
      actors={actorsToDisplay}
      onPageChange={onPageChange}
      onSearch={onSearch}
    />
  );
};

export default ActorsPageContainer;
