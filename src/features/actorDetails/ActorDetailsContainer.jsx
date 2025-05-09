import { useParams } from "react-router-dom";
import { useGetActorDetailsQuery } from "../../store/movieApiService";
import ActorDetails from "./ActorDetails";

const ActorDetailsContainer = () => {
  const { actorId } = useParams();
  const { data: actorData } = useGetActorDetailsQuery(actorId);

  return <ActorDetails actorData={actorData} />;
};

export default ActorDetailsContainer;
