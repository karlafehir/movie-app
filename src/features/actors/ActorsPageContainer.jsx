import { useGetPopularActorsQuery } from "../../store/movieApiService";
import ActorsPage from "./ActorsPage";

const ActorsPageContainer = () => {
  const { data: actors } = useGetPopularActorsQuery();

  return <ActorsPage actors={actors} />;
};

export default ActorsPageContainer;
