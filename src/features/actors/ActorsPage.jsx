import ActorCard from "../../components/cards/actorCard";
import { Pagination } from "antd";
import { Input } from "antd";
import Spinner from "../../components/loading/Spinner";

const ActorsPage = ({
  actors,
  onPageChange,
  onSearch,
  isFetching,
  currentPage,
}) => {
  const { Search } = Input;

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <Search
        placeholder="Search actor"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
      <div className="flex flex-wrap gap-x-6 mt-8">
        {actors &&
          actors.map((actor) => (
            <div key={actor.id}>
              <ActorCard actor={actor} />
            </div>
          ))}
      </div>
      <Pagination
        align="center"
        defaultCurrent={currentPage}
        total={50}
        onChange={onPageChange}
      />
    </>
  );
};

export default ActorsPage;
