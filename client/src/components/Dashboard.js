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

  getReviews = async () => {
    const res = await fetch(`/beers/reviews/user/${this.props.userData.id}`)
      .then(res => res.json())
      .catch(err => console.error);
    console.log("Dashboard reviews", res);
    return this.setState({ reviews: res.reviews });
  };

  render() {
    const { reviews } = this.state;

    return (
      <div className="container text-center shadow-sm p-3 mb-5 bg-white rounded">
        <h1>Dashboard</h1>
        {reviews.length > 0 ? (
          <ul className="list-group">
            {this.state.reviews.map((review, idx) => (
              <li key={`review${idx}`} className="list-group-item">
                {review.text}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "30px" }}>You currently have no reviews.</p>
        )}
      </div>
    );
  }
}

export default Dashboard;
