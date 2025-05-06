import ActorCard from "../../components/cards/actorCard";

const ActorsPage = ({ actors }) => {
  return (
    <>
      <div className="flex flex-wrap gap-x-6">
        {actors &&
          actors.map((actor) => (
            <div key={actor.id}>
              <ActorCard actor={actor} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ActorsPage;
