import { format } from "date-fns";
import { StarFilled } from "@ant-design/icons";
import { Divider } from "antd";

const ActorCardLarge = ({ actorData }) => {
  return (
    <>
      {actorData && (
        <div className="rounded-xl bg-white/5 p-6">
          <img
            className="object-cover rounded-lg"
            src={"https://image.tmdb.org/t/p/original" + actorData.profile_path}
            alt={actorData.title}
          />
          <div className="flex flex-col mt-4">
            <div className="flex justify-between">
              <div className="title">
                <div className="font-bold">{actorData.name}</div>
                <p className="font-light mt-1">
                  {actorData.known_for_department}
                </p>
              </div>
              <div className="px-2 py-1 rounded-lg w-max bg-white/10 font-medium flex gap-2 h-max">
                <StarFilled style={{ color: "#ffda03" }} />
                <p>{actorData.popularity}</p>
              </div>
            </div>
            <Divider />
            <div className="font-light text-white/80">
              {actorData.biography}
            </div>
            <Divider />
            <div className="font-light">
              {format(actorData.birthday, "dd.MM.yyyy.")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActorCardLarge;
