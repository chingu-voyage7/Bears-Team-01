import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as FavoriteIcon } from '../../images/icons/favorite.svg';

class ActivityList extends Component {
  //TODO: Move fetch request & state up to profile page so About component can use review data.
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }
  getUserReviews(userId) {
    fetch(`/beers/reviews/user/${userId}`)
      .then(response => response.json())
      .then(({ reviews }) => this.setState({ reviews }))
      .catch(err => console.log(err));
  }
  handleMakeStars(rating) {
    let ratingDisplay = [];

    for (let i = 0; i <= 4; i++) {
      if (i - rating >= 0) {
        ratingDisplay.push(
          <i className="fas fa-star gray mr-1" aria-hidden="true" key={i} />
        );
      } else {
        ratingDisplay.push(
          <i className="fas fa-star amber mr-1" aria-hidden="true" key={i} />
        );
      }
    }
    return <div>{ratingDisplay}</div>;
  }
  componentDidMount() {
    const userId = this.props.user.id;
    this.getUserReviews(userId);
  }
  render() {
    const reviews = this.state.reviews;
    const user = this.props.user;
    console.log("reviews state: ", this.state.reviews);
    return (
      <section className="user-activity row">
        {reviews.map(review => (
          <div className="row timeline-row" key={review._id}>
            <div className="col-md-8">
              <label>
                <span className="user-name">{user.name}</span> left a review on
                {!!review.beer ? (
                  <Link
                    to={`/beer/${review.beer.id}`}
                    className="timeline-beer-name"
                  >
                    {" "}
                    {review.beer.name}
                  </Link>
                ) : (
                  <span className="timeline-beer-name"> a new beer</span>
                )}
                : {!!review.text && ' "' + review.text + '"'}
              </label>
            </div>
            <div className="col-md-4">
              {this.handleMakeStars(review.category.overall)}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default ActivityList;
