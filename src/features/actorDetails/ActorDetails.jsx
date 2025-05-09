import ActorCardLarge from "../../components/cards/actorCardLarge";
import HomePage from "../home/HomePage";

const ActorDetails = ({ actorData, actorMovies }) => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <ActorCardLarge actorData={actorData} />
      </div>
      <div className="w-3/4 pl-20">
        <div className="font-semibold text-xl pl-3 border-l-4 border-white mt-8">
          Casts in:
        </div>
        <HomePage movies={actorMovies} />
      </div>
    </div>
  );
};

export default ActorDetails;
