import { Card } from "antd";

const MovieCard = ({ movie }) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div style={{ overflow: "hidden", height: "370px" }}>
          <img
            alt="example"
            style={{ height: "100%" }}
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          />
        </div>
      }
    >
      <Meta title={movie.title} description={movie.release_date} />
    </Card>
  );
};

export default MovieCard;
