const ActorDetails = ({ actorData }) => {
  return <>{actorData && <p>{actorData.name}</p>}</>;
};

export default ActorDetails;
