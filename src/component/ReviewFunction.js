import { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "axios";

function ReviewFunction() {
  const [review, setReview] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  async function getReview() {
    const response = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=vcxfMGWpn2o5XtPHCZAVlKuzlSW9FYG0`
    );
    setReview(response.data.results);
    setIsLoading(false)
  }

  useEffect(() => {
    // componentDidMount
    getReview();
    return setReview([]);
  }, []);

  return (
    <div>
      {
        isLoading ? (
          <p className="isLoading">Loading...</p>
        ):(
          review.map((reviews, index) => {
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
          })
        )
      }
    </div>
  );
}

export default ReviewFunction;
