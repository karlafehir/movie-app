import { useParams } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetMoviesForActorQuery,
} from "../../store/movieApiService";
import ActorDetails from "./ActorDetails";

const ActorDetailsContainer = () => {
  const { actorId } = useParams();
  const { data: actorData } = useGetActorDetailsQuery(actorId);
  const { data: actorMovies } = useGetMoviesForActorQuery(actorId);

  return <ActorDetails actorData={actorData} actorMovies={actorMovies} />;
};

export default ActorDetailsContainer;
