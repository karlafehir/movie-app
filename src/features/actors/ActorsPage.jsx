import ActorCard from "../../components/cards/actorCard";
import { Pagination } from "antd";
import { Input } from "antd";

const ActorsPage = ({ actors, onPageChange, onSearch }) => {
  const { Search } = Input;

  return (
    <>
      <Search
        placeholder="Search actor"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
      <div className="flex flex-wrap gap-x-6">
        {actors &&
          actors.map((actor) => (
            <div key={actor.id}>
              <ActorCard actor={actor} />
            </div>
          ))}
      </div>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        onChange={onPageChange}
      />
    </>
  );
};

export default ActorsPage;
