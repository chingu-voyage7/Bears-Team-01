import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    return this.getReviews();
  }

  getReviews() {
    console.log(this.props);
    return fetch(`/beers/reviews/user/${this.props.userData.id}`)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }))
      .catch(err => console.error);
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="container text-center shadow-sm p-3 mb-5 bg-white rounded">
        <h2>Dashboard</h2>
        {reviews.length > 0 ? (
          <ul className="list-group">
            {this.state.reviews.map((review, idx) => (
              <li key={`review${idx}`} className="list-group-item">
                {review.text}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
