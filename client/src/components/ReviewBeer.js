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
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <p>add beer to favorites</p>
            </div>
          </div>
          <div className="form-group">
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
