import React, { Component } from 'react';
//import { ReactComponent as FavoriteIcon } from '../../images/icons/favorite.svg';

class ActivityList extends Component {
  //TODO: Status: "No user activity." if reviews.length === 0
  constructor(){
    super();
    this.state = {
      reviews: [],
      status: ''
    }
  }
  getUserReviews(userId){
    //TODO: create user/reviews/all route (similar to beers/reviews/all)
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
    return (
      <section className="user-activity row">
        {reviews.map(review => 
          <div className="row timeline-row" key={review._id}>
            <div className="col-md-8">
              <label>
                <span className="user-name">{user.name}</span> left new review on (beer name):
                 {!!review.text && '"' + review.text + '"'}
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
