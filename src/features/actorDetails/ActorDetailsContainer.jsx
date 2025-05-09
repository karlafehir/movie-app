import { useParams } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetMoviesForActorQuery,
} from "../../store/movieApiService";
import ActorDetails from "./ActorDetails";

const ActorDetailsContainer = () => {
  const { actorId } = useParams();
  const { data: actorData } = useGetActorDetailsQuery(actorId);
  const { isFetching, data: actorMovies } = useGetMoviesForActorQuery(actorId);

  return (
    <ActorDetails
      actorData={actorData}
      actorMovies={actorMovies}
      isFetching={isFetching}
    />
  );
};

export default ActorDetailsContainer;
