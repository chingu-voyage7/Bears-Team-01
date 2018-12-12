import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerPage extends Component{
//Id: this.props.match.params.id
  render(){
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="beer-container info col-md-8">
            <img className="main-image" src="https://i.imgur.com/oLXSUJP.png"></img>
            <div className="name">
              <h2>Hazy Little Thing</h2>
              <p className="brewery">Sierra Nevada Brewing Co.</p>
            </div>
          </div>  
          <div className="beer-container similar col-md-3 offset-1">
            <h4>Similar Beers</h4>
        </div> 
        </div>
      </div>
    </div>
    )
  }
}

export default BeerPage;
