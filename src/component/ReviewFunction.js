import { useEffect, useState } from "react";
import Card from "./card/Card";

function ReviewFunction() {
  const [review, setReview] = useState([]);
  const [term, setTerm] = useState("everything");

  async function getReview() {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=${process.env.REACT_APP_MOVIE_REVIEW_API_KEY}`
    )
      .then((response) => response.json())
      .then((review) => {
        console.log(review.results);
        setReview(review.results);
      });
  }

  useEffect(() => {
    // componentDidMount
    getReview();
    return setReview([]);
  }, []);
  return (
    <div>
      {review.map((item, index) => {
        const { byline, display_title, critics_pick, headline } = item;
        return (
          <Card key={index}>
            <div className="rev-card">
              <p><span>Byline:</span>{headline}</p>
              <p><span>Critic:</span>{display_title}</p>
              <p><span>Title:</span>{critics_pick}</p>
              <p><span>Headling:</span>{byline}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default ReviewFunction;
