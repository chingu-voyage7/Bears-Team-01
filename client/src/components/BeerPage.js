import React, { Component } from 'react';
import ReviewBeer from './ReviewBeer';
import ReviewList from './ReviewList';
import { Link } from 'react-router-dom';

class BeerPage extends Component{
  constructor(){
    super();
    this.state = {
      beer: [],
      reviewIsActive: false,
      reviews: [],
      status: ''
    }
  }
  createBeerRating = () => {
    let ratingDisplay = [];
    let reviews = this.state.reviews;
    let rating = 0;

    if(!reviews.category){
      //TODO: store and fetch the beer's overall rating in the database instead.
      //TODO: Show half-star ratings

      //average all ratings
      for (let i = 0; i <= reviews.length-1; i++) {
        if(reviews[i].category.overall !== ''){
          rating += parseFloat(reviews[i].category.overall)
        }
      }
      //propagate stars 
      for (let i = 0; i <=4; i++) {
        if ((i - (rating / reviews.length)) >= 0 || reviews.length === 0) {
          ratingDisplay.push( <i className="fas fa-beer rating-icon gray mr-1" aria-hidden="true" key={i}></i>);
        } else {
          ratingDisplay.push( <i className="fas fa-beer rating-icon amber mr-1" aria-hidden="true" key={i}></i>);
        }
      }
    } 
    return (
      <div>
        <div className="col-lg-12">
          { ratingDisplay }
          <span className="ml-3 text-muted">
            <a href="#reviews" className="ml-1">{reviews.length} Reviews</a>
          </span>
        </div>
        { !isNaN(rating / reviews.length) && (
          <div className="col-lg-12">
            <span className="text-muted">{(rating / reviews.length).toFixed(2)} out of 5</span>
          </div>
        )
        }
      </div>
      )
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
    window.scrollTo(0, 0);
    const beerId = this.props.match.params.id;
    this.getBeer(beerId);
    this.getReviews(beerId);
  }
  postBeerReview = (data) => {
    //TODO: Save and render paragraphs & line breaks
    console.log("post beer data", data);
    if(data.textValue.length > 10 && data.categoryValues.overall.length !== 0){
      fetch('/beers/reviews/' + data.beerId, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' // include session cookie
      })
        .then(res => res.json())
        .then(newReview => {
          if(newReview.author){
            this.setState({ 
              reviews: [ newReview, ...this.state.reviews],
              status: 'Thank you for your review.'
            });
          }
          else {
            this.setState({ status: 'You must be logged in to do that!'});
          }
        })
        .then(this.handleReviewToggle())
        .catch(e => console.error(e));
    } else {
      if (data.categoryValues.overall.length === 0){
        this.setState({ status: 'You must choose an overall rating.'});
      } else {
        this.setState({ status: 'Your review must be at least 10 characters long.'});
      }
    }
  }
  handleDeleteButtonClick = (e) => {
    const reviewId = e.target.getAttribute('data-review-id');
    if (window.confirm('Are you sure you want to delete this comment?')) {
      fetch(`/beers/reviews/${reviewId}`, {
        method: "DELETE", 
        body: JSON.stringify({ reviewId })
      })
      .then(response => response.status === 200 
        && this.setState((prevState) => ({reviews: prevState.reviews.filter((review) => reviewId !== review._id)})))
      .catch(err => console.log(err))
    }
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
                    <div className="name col-sm-10">
                      <h2>{ beer.beerName }</h2>
                      {!!beer.brewer && <p className="brewery">{ beer.brewer.name }</p>}
                      <div className="row rating-section">
                          {this.createBeerRating()}
                      </div>
                    </div>
                  </div>
                  <div className="bottom col-lg-12">
                    {!!beer.notes && <p className="rating">{ beer.notes }</p>}
                  </div>
                  <div className="col-sm-12"> 
                    <button className="btn animated-button" title="add to favorites">
                      <i className="fas fa-thumbs-up" alt="thumbs-up-icon"></i>
                    </button> 
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4 padding-mobile" id="reviews">
                <div className="beer-container reviews">
                  <h4 className="mb-4">Reviews</h4>
                  <button onClick={this.handleReviewToggle} className="btn btn-primary">Add a review</button>
                  {!!this.state.reviewIsActive && (
                    <ReviewBeer 
                      postBeerReview={this.postBeerReview}
                      handleReviewToggle={this.handleReviewToggle}
                      beerId={this.props.match.params.id} 
                      />
                  )}
                  <div>
                    {this.state.status.length > 0 && <p className="mt-4">{this.state.status}</p>}
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
                <h4 className="mb-4">Recent Favorites</h4>
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
