import React, { Component } from "react";

// TODO: figure out user flow and logic behind getting a beer recommendation
class BeerRecommendation extends Component {
  state = {};

  render() {
    return <h1>{this.props.userData.id}</h1>;
  }
}

export default BeerRecommendation;
