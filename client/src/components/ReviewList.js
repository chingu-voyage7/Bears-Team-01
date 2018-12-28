import React from 'react';

const ReviewList = ({reviews}) => {

 return (
  <div>
    {reviews.map(review => 
        <div className="row mt-5">
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
        <div className="col-sm-8">
          <p className="review-text">{review.text}</p>
        </div>
      </div>
   )}
  </div>
 )
}

export default ReviewList;
