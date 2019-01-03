import React, { Component } from 'react';
import ReviewBeer from './ReviewBeer';
import ReviewList from './ReviewList';

class BeerPage extends Component{
  constructor(){
    super();
    this.state = {
      beer: [],
      reviewIsActive: false,
      reviews: []
    }
  }
  getBeer(beerId){
    fetch(`/beers/${beerId}`)
    .then(response => response.json())
    .then(json => this.setState({beer: json}))
    .catch(err => console.log(err))
  }
  getReviews(beerId){
    fetch(`/beers/reviews/all/${beerId}`)
    .then(response => response.json())
    .then(json => this.setState({reviews: json}))
    .catch(err => console.log(err))
  }
  handleReviewToggle = () => {
    this.setState(() => ({ reviewIsActive: !this.state.reviewIsActive }));
  }
  componentDidMount(){
    const beerId = this.props.match.params.id;
    this.getBeer(beerId);
    this.getReviews(beerId);
  }
  handleDeleteButtonClick = (e) => {
    const reviewId = e.target.getAttribute('data-review-id');

    if (window.confirm('Are you sure you want to delete this comment?')) {
      fetch(`/beers/reviews/${reviewId}`, {
        method: "DELETE", 
        body: JSON.stringify({ reviewId })
      })
      .catch(err => console.log(err))
    }

    this.setState((prevState) => ({
      reviews: prevState.reviews.filter((review) => reviewId !== review._id)
    }));
  }
  render(){
    const { beer } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-lg-9 padding-mobile">
            <div className="row">     
              <div className="col-lg-12">
                <div className="beer-container info">
                    <div className="top row col-lg-12">
                      <div className="col-md-2 beer-img-container">
                        <img className="beer-img" alt="beer-icon" src="https://i.imgur.com/oLXSUJP.png"></img>
                      </div>
                      <div className="name col-md-10">
                        <h2>{ beer.beerName }</h2>
                        {!!beer.brewer && <p className="brewery">{ beer.brewer.name }</p>}
                        <div className="row rating-section">
                          <div className="col-sm-2">
                            <span 
                              role="img"
                              aria-label="star"
                            >⭐⭐⭐⭐</span>
                          </div>
                          <div className="col-sm-4">
                            <p className="rating-subtitle">88 ratings</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom col-lg-12">
                      {!!beer.notes && <p className="rating">{ beer.notes }</p>}
                    </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4 padding-mobile">
                <div className="beer-container reviews">
                  <h4 className="mb-4">Reviews</h4>

                  <button onClick={this.handleReviewToggle} className="btn btn-primary">Add a review</button>
                  {!!this.state.reviewIsActive && (
                    <ReviewBeer 
                      handleReviewToggle={this.handleReviewToggle}
                      beerId={this.props.match.params.id} 
                      reviews={this.state.reviews}
                      />
                  )}
                  <div>
                      <ReviewList 
                        reviews={this.state.reviews}
                        handleDeleteButtonClick={this.handleDeleteButtonClick}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 padding-mobile">
            <div className="beer-container recent">
              <div className="col-lg-12">
                <h4 className="mb-4">Recent Likes</h4>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="row">
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                </div>
                </div>
                </div>
            </div>
          </div> 
        </div>
    </div>
    )
  }
}

export default BeerPage;
