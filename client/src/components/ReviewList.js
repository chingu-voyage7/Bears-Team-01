import React, { Component } from 'react';

class ReviewList extends Component {
  //TODO:
  //Display edit & delete buttons only to the author
  render() {
    const reviews = this.props.reviews;
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
              {!!review.category && <p className="mt-3">Look: {review.category.look}</p>}
              {!!review.category && <p>Smell: {review.category.smell}</p>}
              {!!review.category && <p>Taste: {review.category.taste}</p>}
              {!!review.category && <p>Overall: {review.category.overall}</p>}
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
