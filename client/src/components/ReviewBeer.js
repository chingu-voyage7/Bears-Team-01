import React, { Component } from 'react';
import RateCategory from './RateCategory';
import { RATE_CATEGORIES } from '../constants';

export default class ReviewBeer extends Component {
  state = {
    categoryValues: {
      look: '',
      smell: '',
      taste: '',
      feel: '',
      overall: ''
    },
    textValue: '',
    favorite: false
  };

  handleSelectChange = (e) => {
    let categoryValues = this.state.categoryValues;
    categoryValues[e.target.name] = e.target.value;

    this.setState({
      categoryValues: categoryValues
    });
  }

  handleTextAreaChange = (e) => {
    this.setState({ textValue: e.target.value })
  };

  handleSubmitClick = e => {
    e.preventDefault();
    const data = { ...this.state };
    data.beerId = this.props.beerId;
    this.props.postBeerReview(data)
  };

  render() {
    return (
      <div className="col-lg-12 mb-4 p-0">
        <h1>{this.props.beerName}</h1>
        <div className="rating-categories mt-4">
          <div className="form-row w-100 p-0 m-0">
            {RATE_CATEGORIES.map((categoryName, idx) => (
              <RateCategory
                key={`category${idx}`}
                categoryName={categoryName}
                handleSelectChange={this.handleSelectChange}
                selectValue={this.state.categoryValues[categoryName]}
              />
            ))}
          </div>
        </div>
        <form onSubmit={this.handleSubmitClick}>
          <input type="hidden" name="beerID" value={this.props.id}></input>
          <div className="form-group mt-4 p-1">
            <label htmlFor="review">
              Review
            </label>
            <textarea
              onChange={this.handleTextAreaChange}
              id="review"
              className="form-control"
              type="text"
              name="review"
              placeholder="Review goes here">
            </textarea>
            <div className="col-lg-12 favorites-checkbox ml-2 mt-4">
              <input className="form-check-input" type="checkbox" value="true" id="defaultCheck1" />
              <p>add beer to favorites</p>
            </div>
          </div>
          <div className="form-group">
            <input className="btn btn-primary mb-1 ml-1" type="submit" value="Submit" />
            <input
              onClick={this.props.handleReviewToggle}
              className="btn btn-outline-primary mb-1 ml-1"
              type="submit"
              value="Close"
            <input 
              className="btn btn-primary mb-1 ml-1" 
              type="submit" 
              value="Submit"
             />
            <input 
              onClick={this.props.handleReviewToggle} 
              className="btn btn-outline-primary mb-1 ml-1" 
              type="submit" 
              value="Close" 
            />
          </div>
        </form>
      </div>
    );
  }
}

/*
  when user submits a review:
    - for each review, normalize all category values to a scale of 0 to 1 (divide by 5)
      - also normalize starRating (divide by 5)
    - so we will have an array of five values representing 'look', 'smell', 'taste', 'feel', 'overall'
  - each element in data array is an object like so: { input: [normalizedCategoryValues], output: [starRating] };
  - POST new review to back end
  - save trainingData to localStorage

/*

/* steps to train model
  - check if localStorage has user's reviews
    - if not, fetch from db and save to localStorage
  - create new neural network (const net = new brain.NeuralNetwork())
  - train model (net.train(data)) (so data is all of the user's normalized reviews)
  - for each beer we have in database, we run net.run([normalizedCategoryValues]) on its normalized values
    - net.run will give us an array so take first score from it
    - push each beer with its' prediction score onto an array
    - sort the array of beers according to prediction score
    - take top 10 (or 20?) and give to user
*/