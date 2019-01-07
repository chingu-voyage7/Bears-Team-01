import React, { Component } from 'react';
//import { ReactComponent as FavoriteIcon } from '../../images/icons/favorite.svg';

class ActivityList extends Component {
  //TODO: Move fetch request & state up to profile page so About component can use review data.
  constructor(){
    super();
    this.state = {
      reviews: [],
    }
  }
  getUserReviews(userId){
    fetch(`/beers/reviews/userid/${userId}`)
    .then(response => response.json())
    .then(json => this.setState({reviews: json}))
    .catch(err => console.log(err))
  }
  componentDidMount(){
    const userId = this.props.user.id
    this.getUserReviews(userId);
  }
  render(){ 
    const reviews = this.state.reviews;
    const user = this.props.user
    console.log('reviews state: ', this.state.reviews)
    return (
      <section className="user-activity row">
        {reviews.map(review => 
          <div className="row timeline-row" key={review._id}>
            <div className="col-md-8">
              <label>
                <span className="user-name">{user.name}</span> left review on
                
                  {!!review.beer ? (
                    <span className="timeline-beer-name"> {review.beer}:</span>
                  ):(
                    <span className="timeline-beer-name"> a new beer:</span>
                  )
                  }
                 {!!review.text && ' "' + review.text + '"'}
              </label>
            </div>
            <div className="col-md-4">
              <i className="fas fa-star" aria-label="star-icon"></i>
            </div>
          </div>
        )}
      </section>
    )
  }
}

export default ActivityList;
