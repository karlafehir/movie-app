import {
  useGetPopularActorsQuery,
  useSearchActorsQuery,
} from "../../store/movieApiService";
import ActorsPage from "./ActorsPage";
import { useState } from "react";

const ActorsPageContainer = () => {
  const [searchParams, setSearchParams] = useState("");
  const [page, setPage] = useState(1);
  const { isFetching, data: actors } = useGetPopularActorsQuery(page);

  const onPageChange = (page) => {
    setPage(page);
  };

  const onSearch = (value, _e) => {
    setSearchParams(value);
  };

  const { data: searchedActors } = useSearchActorsQuery({ searchParams, page });
  const actorsToDisplay =
    searchedActors?.length === 0 ? actors : searchedActors;

  return (
    <ActorsPage
      actors={actorsToDisplay}
      onPageChange={onPageChange}
      onSearch={onSearch}
      isFetching={isFetching}
      currentPage={page}
    />
  );
};

export default ActorsPageContainer;
