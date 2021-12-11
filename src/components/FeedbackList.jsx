import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedbacks ? (
        feedbacks.map((feedback) => {
          return <FeedbackItem key={feedback.id} feedback={feedback} />;
        })
      ) : (
        <p>No Feedback yet</p>
      )}
    </div>
  );
};

export default FeedbackList;
