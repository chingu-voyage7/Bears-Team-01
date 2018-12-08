import React, { Component } from 'react';
import BeerList from './BeerList';

class BrowsePage extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
  }
  getBeers = () => {
    fetch('/beers')
    .then(response => response.json())
    .then(json => this.setState({beers: json}))
    .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.getBeers();
  }
  render() {
    return (
      <div>
        <div className="beer-container">
          <h1>Browse</h1>
          <BeerList beers={this.state.beers} />
        </div>
      </div>
    )
  }
}

export default BrowsePage;
