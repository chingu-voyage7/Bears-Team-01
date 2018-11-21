import React, { Component } from 'react';

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

          <section className="beers row">
            {this.state.beers.map(beer => 
              <article className="beer col-sm-12 col-md-6 col-lg-3" key={beer._id}>
                <p className="beer-name">{beer.beerName}</p>
                <hr/>
                <div className="beer-info">
                  <p className="beer-style"><span className="text-orange">Style:</span> {beer.style}</p>
                  <p><span className="text-orange">ABV:</span> {beer.abv}</p>
                  <p><span className="text-orange">Availability:</span> {beer.availability}</p>
                  <p><span className="text-orange">Notes:</span> {beer.notes}</p>
                </div>
              </article> 
            )}
          </section>

        </div>
       </div>  
    )
  }
}

export default Welcome;
