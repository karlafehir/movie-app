import { Avatar, Card } from "antd";
import { format } from "date-fns";

const ReviewCard = ({ review }) => {
  const { Meta } = Card;

  return (
    <Card>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={review.author}
        description={format(review.created_at, "dd.MM.yyyy.")}
      />
      <p className="text-red">{review.author_details.rating}</p>
      <p className="">{review.content}</p>
    </Card>
  );
};

export default ReviewCard;
