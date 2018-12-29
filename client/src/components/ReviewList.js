import React, { Component } from 'react';

class ReviewList extends Component {
  //TODO:
  //turn into class component
  //pass down reviews as props
  //pass down deleteComment function as props
  //pass down user info as props (to display edit & delete only to the creator)
  render() {
    const reviews = this.props.reviews;
    console.log(this.props);
    return (
      <div>
        {reviews.map(review => 
            <div className="row mt-5" key={review._id}>
            <div className="col-sm-2 review-info">
              <img className="reviewer-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
              <p className="reviwer-name mt-2">{review.author.name}</p>
              <span 
                className="user-rating"
                id="user-rating"
                role="img"
                aria-label="star"
              >⭐⭐⭐⭐</span>
              <p>4.35/5</p>
            </div>
            <div className="col-sm-8 review-text">
              <p>{review.text}</p>
              <button className="btn btn-outline-secondary">edit</button>
              <button onClick={this.props.handleDeleteButtonClick} data-review-id={review._id} className="btn btn-outline-danger">delete</button>
            </div>
          </div>
      )}
      </div>
    )
  }
}

export default ReviewList;
