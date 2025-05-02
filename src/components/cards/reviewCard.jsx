import { format } from "date-fns";
import { StarFilled } from "@ant-design/icons";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="bg-white/5 rounded-xl p-8 border-2 border-white/20">
        <div className="naslovi flex">
          <img
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            alt={review.author}
            className="h-10"
          />
          <div className="pl-2">
            <div className="font-medium">{review.author}</div>
            <div className="font-thin text-gray-300">
              {format(review.created_at, "dd.MM.yyyy.")}
            </div>
          </div>
        </div>
        <div className="px-2 py-1 rounded-lg w-max bg-white/10 mt-4 font-medium flex gap-2">
          <StarFilled style={{ color: "#ffda03" }} />
          {review.author_details.rating} / 10
        </div>
        <div className="mt-2 text-base/8 line-clamp-3">{review.content}</div>
      </div>
    </>
  );
};

export default ReviewCard;
