import React, { Component } from 'react';
import BeerList from './BeerList';

class Welcome extends Component {
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
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4">BeerCraft</h1>
              <p className="lead">AI-powered Beer Recommendations </p>
            </div>
          </div>
          <BeerList beers={this.state.beers} />
        </div>
       </div>  
    )
  }
}

export default Welcome;
