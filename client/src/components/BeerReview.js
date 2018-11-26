import React, { Component } from 'react';
import RateCategory from './RateCategory';
import { RATE_CATEGORIES } from '../constants';
import postBeerReview from '../utilityFns/postBeerReview';

export default class BeerReview extends Component {
  state = {
    categoryValues: {
      look: '',
      smell: '',
      taste: '',
      feel: '',
      overall: ''
    },
    textValue: ''
  };

  handleSelectChange = e =>
    this.setState({
      categoryValues: {
        [e.target.name]: e.target.value
      }
    });

  handleTextAreaChange = e => this.setState({ textValue: e.target.value });

  handleButtonClick = e => {
    // get all values from this.state
    // make POST request to back-end
    // make sure to display success/failed message
    const data = { ...this.state };
    console.log('data is', data);
    // postBeerReview(someRoute, data);
    return false; // stub
  };

  render() {
    return (
      <div className="rate-beer-container">
        <h1>{this.props.beerName}</h1>
        <div className="rating-categories">
          {RATE_CATEGORIES.map((categoryName, idx) => (
            <RateCategory
              key={`category${idx}`}
              categoryName={categoryName}
              handleSelectChange={this.handleSelectChange}
              selectValue={this.state.categoryValues[categoryName]}
            />
          ))}
        </div>
        <textarea
          placeholder="Write your review here."
          value={this.state.textValue}
          onChange={this.handleTextAreaChange}
        />
        <button
          onClick={this.handleButtonClick}
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
      </div>
    );
  }
}
