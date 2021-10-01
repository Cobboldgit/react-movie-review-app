import { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "axios";

function ReviewFunction() {
  const [review, setReview] = useState([]);
  const [term, setTerm] = useState("everything");

  async function getReview() {
    const response = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=t3mQiWiUT5DyCTxCJ4mtlMRjeNlG5XlS`
    );
    setReview(response.data.results);
  }

  useEffect(() => {
    // componentDidMount
    getReview();
    return setReview([]);
  }, []);

  return (
    <div>
      {review.map((reviews, index) => {
        return (
          <Card key={index}>
            <p>
              <span>Headling:</span>
              {reviews.headline}
            </p>
            <p>
              <span>Title:</span>
              {reviews.display_title}
            </p>
            <p>
              <span>Critic:</span>
              {reviews.critics_pick}
            </p>
            <p>
              <span>Byline:</span>
              {reviews.byline}
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export default ReviewFunction;
