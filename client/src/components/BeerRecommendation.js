import React, { Component } from "react";

class BeerRecommendation extends Component {
  state = {};

  render() {
    return <h1>{this.props.userData.id}</h1>;
  }
}

export default BeerRecommendation;
