const ActorCard = ({ actor }) => {
  return (
    <div className="rounded-xl w-30">
      <img
        className="object-cover rounded-lg"
        src={"https://image.tmdb.org/t/p/original" + actor.profile_path}
        alt={actor.name}
      />
      <div className="pt-2 pb-4">
        <div>
          <div className="font-semibold">{actor.name}</div>
          <div className="font-light text-gray-400">{actor.character}</div>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
