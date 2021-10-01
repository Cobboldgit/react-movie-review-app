import React, { Component } from "react";
import Card from "./card/Card";

export default class ReviewClass extends Component {
  constructor() {
    super();
    this.state = {
      review: [],
      term: "everything",
    };
  }
  async getReview() {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.term}&api-key=${process.env.REACT_APP_MOVIE_REVIEW_API_KEY}`
    )
      .then((response) => response.json())
      .then((review) => {
        this.setState({ review: review.results });
      });
  }

  componentDidMount() {
    this.getReview();
  }

  componentWillUnmount() {
    this.setState({ review: [] });
  }

 

  render() {
    return (
      <div>
        {this.state.review.map((item, index) => {
          const { byline, display_title, critics_pick, headline } = item;
          return (
            
              <Card  key={index}>
              <div className="rev-card">
                <div><span>Byline:</span>{byline}</div>
                <div><span>Critic:</span>{critics_pick}</div>
                <div><span>Title:</span>{display_title}</div>
                <div><span>Headling:</span>{headline}</div>
              </div>
              </Card>
            
          );
        })}
      </div>
    );
  }
}
