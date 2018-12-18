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
          <h1>Most Recent</h1>
          <BeerList beers={this.state.beers} />
      </div>
    )
  }
}

export default BrowsePage;
