const ActorCard = ({ actor }) => {
  return (
    <div className="rounded-xl w-30">
      <img
        className="object-cover rounded-lg w-32 h-48"
        src={` ${
          actor.profile_path
            ? "https://image.tmdb.org/t/p/original" + actor.profile_path
            : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        }`}
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
